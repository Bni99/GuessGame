import { Colors } from "../constants/colors";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const Heading = ({ text, children }) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.headingText}>{text}</Text>
      {children}
    </View>
  );
};

export default Heading;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  headingText: {
    fontSize: deviceWidth < 380 ? 24 : 30,
    fontWeight: 900,
    color: Colors.white800,
    textAlign: "center",
    fontFamily: "main-font",
  },

  headingContainer: {
    borderColor: "white",
    borderWidth: deviceWidth < 380 ? 2 : 3,
    borderRadius: deviceWidth < 380 ? 2 : 4,
    width: 180,
    maxWidth: "75%",
    padding: deviceWidth < 380 ? 8 : 12,
    margin: 28,
  },
});
