import { useEffect, useState } from "react";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import Heading from "../components/Heading";
import Card from "../components/Card";

const MainScreen = ({
  changeCurrentScreen,
  numberToBeGuessed,
  getAttempts,
}) => {
  const [clue, setClue] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [attemptsRemaining, setAttemptsRemaining] = useState(10);

  console.log(numberToBeGuessed, enteredNumber);

  const checkNumberIsCorrect = () => {
    if (Number(numberToBeGuessed) === Number(enteredNumber)) {
      getAttempts(attemptsRemaining);
      changeCurrentScreen(5);
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
    if (attemptsRemaining <= 0) {
      getAttempts(attemptsRemaining);
      changeCurrentScreen(5);
    }
  }, [attemptsRemaining]);

  return (
    <SafeAreaView style={styles.mainScreenContainer}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Card heading="Enter Your Guess Here">
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
                title="Give Up"
                onPress={() => changeCurrentScreen(5)}
              />
            </View>
          </View>
        </Card>
        <Heading text="Attempts">
          <Text style={[styles.attemptsText, { fontSize: 34 }]}>
            {attemptsRemaining}/10
          </Text>
        </Heading>
        <View>{clue && <Text style={styles.clueText}>{clue}</Text>}</View>
      </ScrollView>
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
    padding: 20,
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

  attemptsText: {
    fontSize: deviceWidth < 380 ? 24 : 30,
    fontWeight: 900,
    color: Colors.white800,
    textAlign: "center",
    fontFamily: "main-font",
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    marginHorizontal: 10,
  },

  clueText: {
    backgroundColor: "orange",
    padding: 6,
    fontWeight: 600,
    margin: 24,
    fontSize: 22,
  },
});
