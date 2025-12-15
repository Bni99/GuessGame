import { Colors } from "../constants/colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ title, onPress, style }) => {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : [styles.button]
        }
        android_ripple={{ color: "#205976ff" }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    margin: 4,
    overflow: "hidden",
  },

  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: Colors.blue500,
    borderColor: Colors.black800,
    borderWidth: 4,
    elevation: 8,
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 600,
    color: Colors.white800,
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
