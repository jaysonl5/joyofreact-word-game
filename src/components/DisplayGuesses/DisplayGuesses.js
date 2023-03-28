import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";



function DisplayGuesses({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row) => {
        return (
          <p className="guess" key={row}>
            <Guess currentGuess={guessList[row]} answer={answer} />
          </p>
        );
      })}
    </div>
  );
}

export default DisplayGuesses;
