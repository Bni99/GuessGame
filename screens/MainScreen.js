import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native";
import { randomNumberGenerator } from "../constants/randomNumberGenerator";
import { Colors } from "../constants/colors";

const MainScreen = ({ changeCurrentScreen }) => {
  const [numberToBeGuessed, setNumberToBeGuessed] = useState(() =>
    randomNumberGenerator()
  );
  const [clue, setClue] = useState("");
  const [enteredNumber, setEnteredNumber] = useState(null);
  const [attemptsRemaining, setAttemptsRemaining] = useState(10);

  console.log(numberToBeGuessed, enteredNumber);

  const checkNumberIsCorrect = () => {
    if (Number(numberToBeGuessed) === Number(enteredNumber)) {
      setClue("Voila");
      changeCurrentScreen(3);
    } else if (Number(numberToBeGuessed) > Number(enteredNumber)) {
      setClue("Guess a little Higher !");
    } else {
      setClue("Guess a little lower !");
    }
    setEnteredNumber("");
    setAttemptsRemaining((prevValue) => {
      return prevValue - 1;
    });
  };

  useEffect(() => {
    if (attemptsRemaining < 0) {
      changeCurrentScreen(5);
    }
  }, [attemptsRemaining]);

  return (
    <SafeAreaView style={styles.mainScreenContainer}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.mainContainer}>
          <Text style={styles.mainContainerText}>Enter Your Guess Here</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(inputText) => {
              setEnteredNumber(inputText);
            }}
            value={enteredNumber}
            maxLength={2}
            keyboardAppearance="number-pad"
            autoCorrect={false}
          />
          <View style={styles.buttonContainer}>
            <View style={{ flex: 1 }}>
              <PrimaryButton title="Submit" onPress={checkNumberIsCorrect} />
            </View>
            <View style={{ flex: 1 }}>
              <PrimaryButton
                title="Give Up ?"
                onPress={() => changeCurrentScreen(5)}
              />
            </View>
          </View>
        </View>
        <View style={styles.attemptsContainer}>
          <Text style={styles.attemptsText}>Attempts</Text>
          <View>
            <Text style={[styles.attemptsText, { fontSize: 34 }]}>
              {attemptsRemaining}/10
            </Text>
          </View>
        </View>
      </View>
      <View>{clue && <Text style={styles.clueText}>{clue}</Text>}</View>
    </SafeAreaView>
  );
};

export default MainScreen;

const deviceWidth = Dimensions.get("window").width;
console.log(deviceWidth);

const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    backgroundColor: Colors.black500,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 24,
  },

  mainContainerText: {
    fontSize: deviceWidth < 400 ? 20 : 24,
    padding: deviceWidth < 400 ? 12 : 10,
    fontFamily: "main-font",
    textAlign: "center",
  },

  attemptsText: {
    fontSize: deviceWidth < 400 ? 28 : 30,
    fontWeight: 900,
    color: Colors.white800,
    textAlign: "center",
    fontFamily: "main-font",
  },

  textInput: {
    padding: 8,
    fontSize: 36,
    fontWeight: 900,
    borderRadius: 8,
    borderColor: "black",
    borderBottomWidth: 4,
    width: 90,
    textAlign: "center",
  },

  mainContainer: {
    alignItems: "center",
    padding: 4,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 8,
    backgroundColor: Colors.yellow600,
    maxWidth: "95%",
    width: 320,
  },

  attemptsContainer: {
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 4,
    width: 250,
    padding: 12,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    marginHorizontal: 10,
  },

  instructionText: {
    fontSize: 20,
    fontWeight: 800,
    color: "black",
  },

  clueText: {
    fontSize: 24,
    fontWeight: 600,
    color: Colors.white800,
    backgroundColor: Colors.blue500,
    padding: 16,
    borderRadius: 8,
    borderColor: Colors.black800,
    borderWidth: 2,
  },
});
