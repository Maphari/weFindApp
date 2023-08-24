import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { colorStyles, fontStyles } from "../defaultStyles/defaultStyles";

const WelcomeScreen = ({ navigation }) => {
  const handleSignup = () => {
    navigation.navigate("Morewelcome");
  };
  const handleSignin = () => {
    navigation.navigate("Signin");
  };
  return (
    <>
      <View style={styles.containerWelcome}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Image
            source={require("../../../assets/img/logo.png")}
            style={styles.welcomeLogo}
          />
          <Image
            source={require("../../../assets/img/welcome.png")}
            style={styles.welcome}
          />
          <Text style={styles.welcomeText}>
            <Text style={styles.color}>Meet</Text> and{" "}
            <Text style={styles.color}>chat</Text> to people near you
          </Text>
          <Text style={styles.welcomePara}>
            Wematch is a social media app that gives you dating experience and
            other social media experience and more interactions.
          </Text>
          <TouchableOpacity style={styles.buttonGetStarted} onPress={handleSignup}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonlogin} onPress={handleSignin}>
            <Text style={styles.buttonTextlogin}>LOG IN</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  color: {
    color: colorStyles.primaryColor,
  },
  containerWelcome: {
    flex: 1,
    backgroundColor: colorStyles.colorWhite,
  },
  welcomeLogo: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 140,
    height: 90,
    marginVertical: 5,
  },
  welcome: {
    resizeMode: "contain",
    alignSelf: "center",
    height: 330,
  },
  welcomeText: {
    marginHorizontal: 20,
    fontSize: 35,
    letterSpacing: 2,
    fontFamily: fontStyles.poppinsExBold,
  },
  welcomePara: {
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
  buttonlogin: {
    marginHorizontal: 20,
    borderColor: colorStyles.primaryColor,
    borderWidth: 2,
    marginVertical: 10,
    borderRadius: 100,
  },
  buttonTextlogin: {
    textAlign: "center",
    color: colorStyles.primaryColor,
    padding: 17,
    fontFamily: fontStyles.poppinsBold,
    fontSize: 20,
  },
  member: {
    textAlign: "center",
    fontFamily: fontStyles.poppinsRegular,
    opacity: 0.6,
    fontSize: 17,
    marginVertical: 10,
  },
});
export default WelcomeScreen;
