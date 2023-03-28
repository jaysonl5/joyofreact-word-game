import { React, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import DisplayGuesses from "../DisplayGuesses/DisplayGuesses";
import WinLossBanner from "../WinLossBanner/WinLossBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [gameState, setGameState] = useState("");
  guessList && console.log(`guess: ${guessList}`);

  function addGuesses(newGuess) {
    const nextGuesses = [...guessList, { id: Math.random(), label: newGuess }];
    if (newGuess === answer) {
      setGameState("win");
    } else if (guessList.length > 4) {
      setGameState("lose");
    }
    setGuessList(nextGuesses);
  }

  return (
    <>
      <DisplayGuesses guessList={guessList} answer={answer} />
      <GuessInput addGuesses={addGuesses} gameState={gameState} />
      <WinLossBanner
        gameState={gameState}
        guessList={guessList}
        answer={answer}
      />
    </>
  );
}

export default Game;
