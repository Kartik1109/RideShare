import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Wordle() {
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [gameState, setGameState] = useState("ongoing");

  const checkGuess = () => {
    if (word === guess) {
      setGameState("win");
    } else if (wrongGuesses < 5) {
      let correct = [];
      for (let i = 0; i < word.length; i++) {
        if (guess.includes(word[i])) {
          correct.push(word[i]);
        }
      }
      setCorrectLetters(correct);
      setWrongGuesses(wrongGuesses + 1);
    } else {
      setGameState("lose");
    }
  };

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word?number=1"
      );
      const data = await response.json();
      setWord(data[0]);
    };
    fetchWord();
  }, []);

  const displayGuess = () => {
    let display = "";
    for (let i = 0; i < word.length; i++) {
      if (correctLetters.includes(word[i])) {
        display += word[i] + " ";
      } else {
        display += "_ ";
      }
    }
    return display.trim();
  };

  const resetGame = () => {
    setGuess("");
    setWrongGuesses(0);
    setCorrectLetters([]);
    setGameState("ongoing");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wordle</Text>
      <Text style={styles.word}>{displayGuess()}</Text>
      {gameState === "ongoing" ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={guess}
            onChangeText={setGuess}
            placeholder="Enter your guess"
          />
          <Button title="Guess" onPress={checkGuess} />
        </View>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {gameState === "win" ? "You Win!" : "You Lose!"}
          </Text>
          <Button title="Play Again" onPress={resetGame} />
        </View>
      )}
      {wrongGuesses > 0 && (
        <Text style={styles.wrongGuess}>Wrong Guesses: {wrongGuesses}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f7f7f7",
    },
    title: {
      fontSize: 30,
      marginBottom: 20,
      fontWeight: "bold",
      color: "#444444",
    },
    word: {
      fontSize: 20,
      marginBottom: 20,
      fontWeight: "bold",
      color: "#444444",
    },
    inputContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "#cccccc",
      padding: 10,
      flex: 1,
      marginRight: 10,
      borderRadius: 5,
      color: "#444444",
    },
    resultContainer: {
      alignItems: "center",
    },
    resultText: {
      fontSize: 30,
      marginBottom: 20,
      fontWeight: "bold",
      color: "#444444",
    },
    button: {
      backgroundColor: "#0077cc",
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
    },
    wrongGuess: {
      color: "#ff3333",
      fontWeight: "bold",
    },
    correctGuess: {
      color: "#33cc33",
      fontWeight: "bold",
    },
  });
  