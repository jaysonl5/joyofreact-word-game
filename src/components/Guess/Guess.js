import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ currentGuess, answer }) {
  let checkArray;
  if (currentGuess) {
    checkArray = checkGuess(currentGuess.label, answer);
  }

  return (
    <>
      {range(0, 5).map((num) => {
        return (
          <span className={currentGuess ? `cell ${checkArray[num].status}` : "cell"} key={num}>
            {currentGuess && checkArray[num].letter}
          </span>
        );
      })}
    </>
  );
}

export default Guess;
