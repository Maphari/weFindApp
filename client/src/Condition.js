import React, { useEffect, useState } from "react";
import ScreensContainer, {
  LogedIn,
} from "./components/screens/ScreensContainer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Condition = () => {
  const [isLoggedIn, setIsLoggedin] = useState(false);

  const getAccess = async () => {
    try {
      const access = await AsyncStorage.getItem("loggedIn");
      setIsLoggedin(access);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAccess();
  }, [isLoggedIn]);

  return <>{isLoggedIn ? <LogedIn /> : <ScreensContainer />}</>;
};

export default Condition;
