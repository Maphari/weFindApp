import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colorStyles } from "../defaultStyles/defaultStyles";

const HomeScreen = () => {
  return (
    <>
      <View style={styles.header}>
        <Text>header</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
   backgroundColor: colorStyles.colorWhite
  },
});
export default HomeScreen;
