import { Colors } from "../constants/colors";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const Card = ({ children, heading }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.heading}>{heading}</Text>
      {children}
    </View>
  );
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    padding: 4,
    borderColor: "black",
    borderWidth: deviceWidth < 380 ? 2 : 4,
    borderRadius: 8,
    backgroundColor: Colors.yellow600,
    maxWidth: "96%",
    width: 320,
  },

  heading: {
    fontSize: deviceWidth < 380 ? 20 : 24,
    padding: deviceWidth < 380 ? 12 : 10,
    fontFamily: "main-font",
    textAlign: "center",
  },
});
