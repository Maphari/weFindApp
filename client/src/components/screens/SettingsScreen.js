import React from "react";
import { Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = ({ navigation }) => {
  return (
    <>
      <Text>Settings Screen</Text>
      <TouchableOpacity
        style={{ backgroundColor: "red", padding: 12 }}
        onPress={() => {
          AsyncStorage.setItem("loggedIn", "");
          AsyncStorage.setItem("token", "");
          navigation.navigate("Signin");
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </>
  );
};

export default SettingsScreen;
