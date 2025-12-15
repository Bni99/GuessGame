import { Colors } from "../constants/colors";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const InstructionScreen = ({ text }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.instructionText}>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

export default InstructionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.yellow600,
    alignItems: "center",
    justifyContent: "center",
  },

  screenContainer: {
    padding: 48,
  },

  instructionText: {
    fontSize: 64,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.black800,
    fontFamily: "main-font",
  },
});
