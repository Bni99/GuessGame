import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Colors } from "./constants/colors";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import GameStartScreen from "./screens/GameStartScreen";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import InstructionScreen from "./screens/InstructionScreen";
import MainScreen from "./screens/MainScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const [fontLoading] = useFonts({
    "main-font": require("./assets/fonts/AlfaSlabOne-Regular.ttf"),
  });

  if (!fontLoading) return <AppLoading />;

  const changeCurrentScreen = (value) => {
    if (value === 1) {
      setCurrentScreen(1);
      setTimeout(() => {
        setCurrentScreen(2);
      }, 2000);
      setTimeout(() => {
        setCurrentScreen(3);
      }, 4000);
      setTimeout(() => {
        setCurrentScreen(4);
      }, 6000);
    } else if (value === 5) {
      setCurrentScreen(5);
    }
  };

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={[Colors.black500, Colors.black800]}
        style={styles.container}
      >
        {currentScreen === 0 && (
          <GameStartScreen changeCurrentScreen={changeCurrentScreen} />
        )}
        {currentScreen === 1 && (
          <InstructionScreen
            text={"Try To Guess The Number Between 0 And 100."}
          />
        )}
        {currentScreen === 2 && (
          <InstructionScreen text={"You have a Maximum Of 10 Attempts !"} />
        )}
        {currentScreen === 3 && <InstructionScreen text={"Let's Go !!!!"} />}
        {currentScreen === 4 && (
          <MainScreen changeCurrentScreen={changeCurrentScreen} />
        )}
        {currentScreen === 5 && <GameOverScreen />}
        <StatusBar style="auto" />
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
