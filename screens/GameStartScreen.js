import { Colors } from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const GameStartScreen = ({ changeCurrentScreen }) => {
  return (
    <SafeAreaView style={styles.gameStartScreenContainer}>
      <View style={styles.subContainer}>
        <View style={styles.box}>
          <FontAwesome5 name="question" size={180} color={Colors.black800} />
        </View>
        <View style={styles.mainScreenTextContainer}>
          <Text style={styles.mainScreenText}>Guess The Number</Text>
        </View>
      </View>
      <PrimaryButton
        title="Start A New Game"
        onPress={() => changeCurrentScreen(1)}
        style={styles.button}
      />
    </SafeAreaView>
  );
};

export default GameStartScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  gameStartScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  subContainer: {
    alignItems: "center",
  },

  box: {
    height: deviceWidth < 380 ? 200 : 220,
    width: deviceWidth < 380 ? 220 : 240,
    backgroundColor: Colors.yellow600,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
    elevation: 4,
  },

  mainScreenText: {
    fontFamily: "main-font",
    fontSize: 46,
    marginTop: 16,
    color: Colors.white800,
    textAlign: "center",
    flexWrap: "wrap",
  },

  mainScreenTextContainer: {
    width: 250,
  },

  button: {
    marginBottom: 100,
  },
});
