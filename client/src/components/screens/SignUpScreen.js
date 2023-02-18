import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colorStyles, fontStyles } from "../defaultStyles/defaultStyles";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import client from "../../api/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);

  const [validUsername, setValidUsername] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [validGender, setValidGender] = useState("");
  const [validMobile, setValidMobile] = useState("");
  const [validPassword, setValidPassword] = useState("");

  const handlePasswordToggle = () => {
    setHidePassword(!hidePassword);
  };

  const handleValidUsername = () => {
    if (!username) {
      setValidUsername("Username required");
    } else if (username.length < 6) {
      setValidUsername("more tha 6 characters");
    } else {
      setValidUsername("");
    }
  };
  const handleValidEmail = () => {
    if (!email) {
      setValidEmail("Email required");
    } else {
      setValidEmail("");
    }
  };
  const handleValidGender = () => {
    if (!gender) {
      setValidGender("Gender required");
    } else {
      setValidGender("");
    }
  };
  const handleValidMobile = () => {
    if (!mobile) {
      setValidMobile("Mobile number required");
    } else if (mobile.length < 9) {
      setValidMobile("More than 10 digits");
    } else {
      setValidMobile("");
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
  return (
    <>
      <View style={styles.containerSignup}>
        <ScrollView>
          <KeyboardAwareScrollView>
            <Text style={styles.containerSignupHead}>
              Create <Text style={styles.color}>account</Text>
            </Text>
            <Text style={styles.containerSignupPara}>
              Provide all the required information
            </Text>

            <View style={styles.containerInput}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.containerInputHead}>Username</Text>
                {validUsername ? (
                  <Text style={styles.err}>Username is Required</Text>
                ) : null}
              </View>
              <View style={styles.outer}>
                <FontAwesome name="user" style={styles.icon} />
                <TextInput
                  style={styles.containerInputMain}
                  placeholder="Enter your name"
                  autoCapitalize={false}
                  value={username}
                  onChangeText={(newUsername) => {
                    setUsername(newUsername);
                    handleValidUsername();
                  }}
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
                <Text style={styles.containerInputHead}>Gender</Text>
                {validGender ? (
                  <Text style={styles.err}>Gender is Required</Text>
                ) : null}
              </View>
              <View style={styles.outer}>
                <MaterialCommunityIcons
                  name="gender-male-female"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.containerInputMain}
                  placeholder="Male"
                  autoCapitalize={false}
                  value={gender}
                  onChangeText={(newGender) => {
                    setGender(newGender);
                    handleValidGender();
                  }}
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
                <Text style={styles.containerInputHead}>Mobile Number</Text>
                {validMobile ? (
                  <Text style={styles.err}>Mobile Number is Required</Text>
                ) : null}
              </View>
              <View style={styles.outer}>
                <MaterialCommunityIcons name="phone" style={styles.icon} />
                <TextInput
                  style={styles.containerInputMain}
                  placeholder="+27 71 234 8909"
                  autoCapitalize={false}
                  value={mobile}
                  onChangeText={(newMobile) => {
                    setMobile(newMobile);
                    handleValidMobile();
                  }}
                  keyboardType="number-pad"
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
              by registering you agree to our terms and conditions
            </Text>
            <TouchableOpacity
              style={styles.buttonGetStarted}
              onPress={() => {
                if (!username && !email && !gender && !mobile && !password) {
                  handleValidUsername();
                  handleValidEmail();
                  handleValidGender();
                  handleValidMobile();
                  handleValidPassword();
                } else {
                  client
                    .post("/signup", {
                      username,
                      email,
                      gender,
                      mobile,
                      password,
                    })
                    .then(function (response) {
                      AsyncStorage.setItem("loggedIn", JSON.stringify(true));
                      AsyncStorage.setItem(
                        "token",
                        JSON.stringify(response.data)
                      );
                      if (response) {
                        navigation.navigate("Moreinfo");
                      }
                    })
                    .catch(function (error) {
                      console.log(error.message);
                    });
                }
              }}
            >
              <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
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
});
export default SignUpScreen;
