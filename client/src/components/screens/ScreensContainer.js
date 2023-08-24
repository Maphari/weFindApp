import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { colorStyles, fontStyles } from "../defaultStyles/defaultStyles";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// SCREENS
import WelcomeScreen from "./WelcomeScreen";
import MoreWelcome from "./MoreWelcome";
import MoreInfo from "./MoreInfo";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SigninScreen";
import HomeScreen from "./Homescreen";
import MessageScreen from "./MessageScreen";
import FeedScreen from "./FeedScreen";
import SettingsScreen from "./SettingsScreen";

const ScreensContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Morewelcome"
          component={MoreWelcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Moreinfo"
          component={MoreInfo}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export const LogedIn = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Homescreen"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Message") {
              iconName = focused ? "mail" : "mail-outline";
            } else if (route.name === "Feed") {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Icon name={iconName} size={26} color={color} />;
          },
          tabBarStyle: { paddingVertical: 2, height: 60 },
          tabBarIconStyle: { marginTop: 1 },
          tabBarLabelStyle: {
            fontFamily: fontStyles.poppinsRegular,
            fontSize: 12,
          },
          tabBarActiveTintColor: colorStyles.primaryColor,
          tabBarInactiveTintColor: colorStyles.colorGray,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Discover", headerShown: false }}
        />
        <Tab.Screen name="Message" component={MessageScreen} />
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default ScreensContainer;
