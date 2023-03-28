import React from "react";

function WinLossBanner({ gameState, guessList, answer }) {
  if (gameState === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessList.length} guesses.</strong>
        </p>
      </div>
    );
  }

  if (gameState === "lose") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is {" "}
          <strong>{answer}.</strong>
        </p>
      </div>
    );
  }
}

export default WinLossBanner;
