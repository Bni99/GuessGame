import Card from "../components/Card";
import Heading from "../components/Heading";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";

const GameOverScreen = ({ numberToBeGuessed, attempts, gameRestart }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Heading text="Game Over" />
      <Card heading="Game Stats">
        <View style={styles.statsTextContainer}>
          <Text style={styles.statsText}>
            Number :{" "}
            <Text style={{ fontWeight: 900, fontFamily: "main-font" }}>
              {numberToBeGuessed}
            </Text>
          </Text>
          <Text style={styles.statsText}>
            Attempts Remaining :{" "}
            <Text style={{ fontWeight: 900, fontFamily: "main-font" }}>
              {attempts}
            </Text>
          </Text>
          <Text style={styles.statsText}>
            Final Verdict :{" "}
            <Text style={{ fontWeight: 900, fontFamily: "main-font" }}>
              {attempts > 0 ? "You Win" : "You Lose"}
            </Text>
          </Text>
        </View>
      </Card>

      <PrimaryButton
        title="Start a new game"
        style={{ marginTop: 100 }}
        onPress={gameRestart}
      />
    </SafeAreaView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  statsText: {
    backgroundColor: "orange",
    padding: 6,
    fontWeight: 600,
    margin: 4,
    width: "96%",
  },

  statsTextContainer: {
    width: "100%",
    alignItems: "flex-start",
  },
});
