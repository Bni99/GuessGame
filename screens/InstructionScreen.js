import { Colors } from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, StyleSheet, Text, View } from "react-native";

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

const deviceWidth = Dimensions.get("window").width;

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
    fontSize: deviceWidth < 380 ? 56 : 64,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.black800,
    fontFamily: "main-font",
  },
});
