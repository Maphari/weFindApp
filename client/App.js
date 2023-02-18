import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import {
  StyleSheet,
  StatusBar as StatusBarA,
  SafeAreaView,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

// IMPORTING SCREEN HANDLER
import Condition from "./src/Condition";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Exbold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });
   // OnOpenApp and if font loaded
   const layoutFontLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container} onLayout={layoutFontLoaded}>
      <Condition />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBarA.currentHeight : 0,
  },
});
