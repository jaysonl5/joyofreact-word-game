import { React, useState } from "react";

function GuessInput({addGuesses, gameState}) {
  const [guessText, setGuessText] = useState("");

  function handleFormSubmit(event){
    event.preventDefault();
    addGuesses(guessText);
    setGuessText('');
  }

  const handleInputChange = (event) => {
    const incomingGuess = event.target.value.toUpperCase();
    if (!incomingGuess.match("[A-Z]{5}")) {
    event.target.setCustomValidity("Please enter a FIVE character word.")
    } else {
      event.target.setCustomValidity("")
    }
    setGuessText(incomingGuess)
  }


  return (
    <form className="guess-input-wrapper" onSubmit={(event) => handleFormSubmit(event)}>
      <label htmlFor="guess-input">
        Enter guess:
        <input
          id="guess-input"
          type="text"
          value={guessText}
          pattern="[A-Z]{5}"
          required
          disabled={gameState ? true : false}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}

export default GuessInput;
