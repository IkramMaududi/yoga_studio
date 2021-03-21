import React, { useMemo, useState } from "react";
import './JanKenPon.css';

const choices = ["rock", "paper", "scissors"];

function JanKenPon() {
  const [player, setPlayer] = useState("");
  const [bot, setBot] = useState("");

  const play = () => {
    if (!player) {
      return;
    }
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    setBot(choices[computerChoiceIndex]);
  };

  const result = useMemo(() => {
    if (bot === player) {
      // add a tie result to database
      return `it's a tie`;
    } else {
      if (
        (bot === "rock" && player === "scissors") ||
        (bot === "paper" && player === "rock") ||
        (bot === "scissors" && player === "paper")
      ) {
        // add a lose result to database
        return "computer won";
      }
      // add a win result to database
      return "player won";
    }
  }, [bot, player]);

  return (
    <div>
      <div>
        <button onClick={() => setPlayer("rock")}>rock</button>
        <button onClick={() => setPlayer("paper")}>paper</button>
        <button onClick={() => setPlayer("scissors")}>scissors</button>
      </div>
      <button onClick={play}>play</button>
      <p>your choice: {player}</p>
      <p>computer's choice: {bot}</p>
      <div>{result}</div>
    </div>
  );
};

export default JanKenPon;