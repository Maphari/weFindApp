import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { colorStyles, fontStyles } from "../defaultStyles/defaultStyles";

const MoreWelcome = ({navigation}) => {
  const handleSignup = () => {
    navigation.navigate("Signup");
  };
  return (
    <>
      <View style={styles.containerSignup}>
        <Image
          source={require("../../../assets/img/welcomee.png")}
          style={styles.welcome}
        />
        <Text style={styles.welcomeText}>
          Now, add your <Text style={styles.color}>basic information</Text> find
          the <Text style={styles.color}>right one</Text>
        </Text>
        <Text style={styles.welcomePara}>
          You can choose to hide your profile information Wefind keeps your
          information safe and secure worry less we got you
        </Text>
        <TouchableOpacity
          style={styles.buttonGetStarted}
          onPress={handleSignup}
        >
          <Text style={styles.buttonText}>ENTER BASIC INFORMATION</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  color: {
    color: colorStyles.primaryColor,
  },
  containerSignup: {
    flex: 1,
    backgroundColor: colorStyles.colorWhite,
  },
  welcome: {
    resizeMode: "contain",
    alignSelf: "center",
    height: 280,
    marginVertical: 25,
  },
  welcomeText: {
    marginHorizontal: 20,
    fontSize: 33,
    letterSpacing: 2,
    fontFamily: fontStyles.poppinsExBold,
  },
  welcomePara: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    fontFamily: fontStyles.poppinsRegular,
    lineHeight: 20,
    letterSpacing: 1,
    opacity: 0.3,
  },
  buttonGetStarted: {
    marginHorizontal: 20,
    backgroundColor: colorStyles.primaryColor,
    marginVertical: 10,
    borderRadius: 100,
  },
  buttonText: {
    textAlign: "center",
    color: colorStyles.colorWhite,
    padding: 17,
    fontFamily: fontStyles.poppinsBold,
    fontSize: 20,
  },
});
export default MoreWelcome;
