import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  price: number;
  info: string;
  img: any;
}

export interface BasketState {
  products: Array<Product & { quantity: number }>;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
  clearCart: () => void;
  items: number;
  total: number;
}

const useBasketStore = create<BasketState>((set) => ({
  products: [],
  items: 0,
  total: 0,
  addProduct: (product) => {
    set((state) => {
      const index = state.products.findIndex((p) => p.id === product.id);
      if (index === -1) {
        return {
          products: [...state.products, { ...product, quantity: 1 }],
          items: state.items + 1,
          total: state.total + product.price,
        };
      } else {
        const products = [...state.products];
        products[index].quantity += 1;
        return {
          products,
          items: state.items + 1,
          total: state.total + product.price,
        };
      }
    });
  },
  reduceProduct(product) {
    set((state) => {
      state.total -= product.price;
      state.items -= 1;
      return {
        products: state.products
          .map((p) => {
            if (p.id === product.id) {
              p.quantity -= 1;
            }
            return p;
          })
          .filter((p) => p.quantity > 0),
      };
    });
  },
  clearCart() {
    set({ products: [], items: 0, total: 0 });
  },
}));

export default useBasketStore;
