import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetter from "./components/WrongLetter";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import { showNotification as show } from "./helper/helper";

const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const App = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setNotification] = useState(false);

  useEffect(() => {
    const handelKeyDown = (event) => {
      const { key, keyCode } = event;
      if (keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetter) => [...currentLetter, letter]);
          } else {
            show(setNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetter) => [...currentLetter, letter]);
          } else {
            show(setNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handelKeyDown);
    return () => window.removeEventListener("keydown", handelKeyDown);
  }, [correctLetters, wrongLetters, playable]);

  const playAgain = () => {
    setPlayable(true);
    setCorrectLetters([])
    setWrongLetters([])
    const random = Math.floor(Math.random() * words.length)
    selectedWord = words[random]
  }
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetter={wrongLetters} />
        <WrongLetter wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetter={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain = {playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
};
export default App;
