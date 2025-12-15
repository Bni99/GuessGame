import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const GameOverScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Entypo name="emoji-sad" size={76} color={Colors.white800} />
      <Text
        style={{
          fontSize: 32,
          fontWeight: 800,
          fontFamily: "main-font",
          color: Colors.white800,
        }}
      >
        Game Over !
      </Text>
      <View>
        <Text>Game Stats</Text>
        <View>
          <Text>Attempts :</Text>
          <Text>You Won!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({});
