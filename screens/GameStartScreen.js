import { Colors } from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const GameStartScreen = ({ changeCurrentScreen }) => {
  const { width, height } = useWindowDimensions();

  const boxHeight = height < 630 ? 210 : 190;
  const boxWidth = width < 380 ? 200 : 220;
  const textContainerWidth = width < 380 ? 200 : 300;

  return (
    <SafeAreaView style={styles.gameStartScreenContainer}>
      <ScrollView
        style={styles.subContainer}
        contentContainerStyle={{
          alignItems: "center",
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={[styles.box, { height: boxHeight, width: boxWidth }]}>
            <FontAwesome5
              name="question"
              size={width < 380 ? 100 : 160}
              color={Colors.black800}
            />
          </View>
          <View
            style={[
              styles.mainScreenTextContainer,
              { width: textContainerWidth },
            ]}
          >
            <Text style={styles.mainScreenText}>Guess The Number</Text>
          </View>
        </View>

        <PrimaryButton
          title="Start A New Game"
          onPress={() => changeCurrentScreen(1)}
          style={styles.button}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameStartScreen;

const styles = StyleSheet.create({
  gameStartScreenContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  subContainer: {
    marginBottom: 16,
    flex: 1,
  },

  box: {
    backgroundColor: Colors.yellow600,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
    elevation: 4,
  },

  mainScreenText: {
    fontFamily: "main-font",
    fontSize: 42,
    color: Colors.white800,
    textAlign: "center",
    flexWrap: "wrap",
  },

  mainScreenTextContainer: {
    marginHorizontal: 16,
  },

  button: {
    margin: 24,
  },
});
