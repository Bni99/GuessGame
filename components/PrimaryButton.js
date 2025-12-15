import { Colors } from "../constants/colors";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ title, onPress, style, disabled = false }) => {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed && !disabled && styles.pressed,
          disabled && styles.disabled,
        ]}
        android_ripple={{ color: "#205976ff" }}
        disabled={disabled}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    margin: 4,
    overflow: "hidden",
  },

  button: {
    paddingHorizontal: deviceWidth < 380 ? 16 : 20,
    paddingVertical: deviceWidth < 380 ? 8 : 12,
    backgroundColor: Colors.blue500,
    borderColor: Colors.black800,
    borderWidth: deviceWidth < 380 ? 2 : 4,
    elevation: 8,
    borderRadius: 8,
  },

  buttonText: {
    fontSize: deviceWidth < 380 ? 18 : 20,
    fontWeight: 600,
    color: Colors.white800,
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },

  disabled: {
    backgroundColor: "#ccc",
    borderColor: "#ccc",
    borderWidth: 2,
  },
});
