import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colorStyles, fontStyles } from "../defaultStyles/defaultStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import client from "../../api/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);

  const [validEmail, setValidEmail] = useState("");
  const [validPassword, setValidPassword] = useState("");

  const [isLoggedin, setIsLoggedIn] = useState("");

  const [err, setErr] = useState()

  const handlePasswordToggle = () => {
    setHidePassword(!hidePassword);
  };

  const handleValidEmail = () => {
    if (!email) {
      setValidEmail("Email required");
    } else {
      setValidEmail("");
    }
  };

  const handleValidPassword = () => {
    if (!password) {
      setValidPassword("Password required");
    } else if (password.length < 8) {
      setValidPassword("at least more than 8 charactes");
    } else {
      setValidPassword("");
    }
  };

  const onLog = () => {
    if (!email && !password) {
      handleValidEmail();
      handleValidPassword();
    } else {
      client.get("/signin").then((response) => setErr(response.data))
        .catch(function (error) {
          console.log(error.message);
        });
    }
  }
  return (
    <>
      <View style={styles.containerSignup}>
        <ScrollView>
          <Text style={styles.containerSignupHead}>
            Log in <Text style={styles.color}>In</Text>
          </Text>
          <Text style={styles.containerSignupPara}>
            welcome back we provide better experience
          </Text>
          {isLoggedin ? <Text style={styles.errmes}>{isLoggedin}</Text> : null}
          <View style={styles.containerInput}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.containerInputHead}>Email</Text>
              {validEmail ? (
                <Text style={styles.err}>Email is Required</Text>
              ) : null}
            </View>
            <View style={styles.outer}>
              <MaterialCommunityIcons name="email" style={styles.icon} />
              <TextInput
                style={styles.containerInputMain}
                placeholder="Example@gmail.com"
                autoCapitalize={false}
                value={email}
                onChangeText={(newEmail) => {
                  setEmail(newEmail);
                  handleValidEmail();
                }}
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.containerInput}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.containerInputHead}>Password</Text>
              {validPassword ? (
                <Text style={styles.err}>Password is Required</Text>
              ) : null}
            </View>
            <View style={styles.outer}>
              <TextInput
                style={styles.containerInputMain}
                placeholder="at least 8 characters"
                autoCapitalize={false}
                value={password}
                onChangeText={(newPassword) => {
                  setPassword(newPassword);
                  handleValidPassword();
                }}
                secureTextEntry={!hidePassword}
              />
              <TouchableOpacity
                style={[styles.iconButton, styles.iconn]}
                onPress={handlePasswordToggle}
              >
                <MaterialCommunityIcons
                  name={hidePassword ? "eye" : "eye-off"}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.agreement}>
            by Logging in you agree to our terms and conditions
          </Text>
          <TouchableOpacity
            style={styles.buttonGetStarted}
            onPress={() => {
              if (!email && !password) {
                handleValidEmail();
                handleValidPassword();
              } else {
                client
                  .post("/signin", {
                    email,
                    password,
                  })
                  .then(function (response) {
                    const value = AsyncStorage.getItem("token");
                    if (value !== null) {
                      navigation.navigate("Home");
                    } else {
                      setIsLoggedIn("You must create an account first");
                    }
                    onLog()
                  })
                  .catch(function (error) {
                    console.log(error.message);
                  });
              }
            }}
          >
            <Text style={styles.buttonText}>LOG IN</Text>
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
  containerSignup: {
    flex: 1,
    backgroundColor: colorStyles.colorWhite,
  },
  containerSignupHead: {
    fontSize: 32,
    paddingHorizontal: 20,
    marginTop: 15,
    fontFamily: fontStyles.poppinsExBold,
  },
  containerSignupPara: {
    opacity: 0.4,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  containerInput: {
    marginHorizontal: 20,
    marginVertical: 9,
  },
  containerInputHead: {
    fontFamily: fontStyles.poppinsRegular,
    opacity: 0.6,
    marginBottom: 5,
  },
  outer: {
    backgroundColor: "#E4E4E4",
    flexDirection: "row",
    borderRadius: 10,
  },
  containerInputMain: {
    flex: 1,
    padding: 18,
    fontFamily: fontStyles.poppinsRegular,
  },
  icon: {
    alignSelf: "center",
    fontSize: 22,
    color: colorStyles.primaryColor,
    marginLeft: 15,
  },
  iconn: {
    marginRight: 15,
  },
  iconButton: {
    alignSelf: "center",
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
  agreement: {
    marginHorizontal: 20,
    marginVertical: 10,
    opacity: 0.5,
  },
  err: {
    opacity: 0.5,
    fontFamily: fontStyles.poppinsRegular,
    color: "red",
  },
  errmes: {
    fontFamily: fontStyles.poppinsRegular,
    marginHorizontal: 20,
    opacity: 0.7,
    color: "red",
  },
});
export default SignUpScreen;
