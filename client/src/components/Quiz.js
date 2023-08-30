import React, { useState } from "react";
import Question from "./Question";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCat) => {
    const updatedAnswers = [...userAnswers, isCat];
    setUserAnswers(updatedAnswers);
    if (isCat) {
      setScore(score + 1);
    }
  };

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h1>Cat or Not Quiz</h1>
        <p>Score: {score}</p>
        <p>Questions Answered: {userAnswers.length}</p>
      </div>
      <Question onAnswer={handleAnswer} />
    </div>
  );
}

export default Quiz;
