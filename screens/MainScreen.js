import { useEffect, useState } from "react";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { randomNumberGenerator } from "../constants/randomNumberGenerator";
import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native";

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
              <PrimaryButton
                title="Submit"
                onPress={checkNumberIsCorrect}
                disabled={enteredNumber === "" ? true : false}
              />
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

const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    backgroundColor: Colors.black500,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 24,
  },

  mainContainerText: {
    fontSize: deviceWidth < 380 ? 20 : 24,
    padding: deviceWidth < 380 ? 12 : 10,
    fontFamily: "main-font",
    textAlign: "center",
  },

  attemptsText: {
    fontSize: deviceWidth < 380 ? 24 : 30,
    fontWeight: 900,
    color: Colors.white800,
    textAlign: "center",
    fontFamily: "main-font",
  },

  textInput: {
    padding: deviceWidth < 380 ? 6 : 8,
    fontSize: deviceWidth < 380 ? 32 : 36,
    fontWeight: 900,
    borderRadius: 8,
    borderColor: "black",
    borderBottomWidth: deviceWidth < 380 ? 3 : 4,
    width: deviceWidth < 380 ? 70 : 90,
    textAlign: "center",
  },

  mainContainer: {
    alignItems: "center",
    padding: 4,
    borderColor: "black",
    borderWidth: deviceWidth < 380 ? 2 : 4,
    borderRadius: 8,
    backgroundColor: Colors.yellow600,
    maxWidth: "96%",
    width: 320,
  },

  attemptsContainer: {
    borderColor: "white",
    borderWidth: deviceWidth < 380 ? 2 : 3,
    borderRadius: deviceWidth < 380 ? 2 : 4,
    width: 180,
    maxWidth: "75%",
    padding: deviceWidth < 380 ? 8 : 12,
    margin: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    marginHorizontal: 10,
  },

  clueText: {
    fontSize: deviceWidth < 380 ? 20 : 24,
    fontWeight: 600,
    color: Colors.white800,
    backgroundColor: Colors.blue500,
    padding: deviceWidth < 380 ? 10 : 16,
    borderRadius: 8,
    borderColor: Colors.black800,
    borderWidth: 2,
  },
});
