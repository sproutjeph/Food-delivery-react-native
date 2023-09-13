import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const LocationSearch = () => {
  return (
    <View>
      <Text>LocationSearch</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  absoluteBox: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  boxIcon: {
    position: "absolute",
    left: 15,
    top: 18,
    zIndex: 1,
  },
});

export default LocationSearch;
