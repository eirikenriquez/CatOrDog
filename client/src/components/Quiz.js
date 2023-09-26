import React, { useState, useEffect } from "react";
import Question from "./Question";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState(() => {
    const storedUserAnswers = sessionStorage.getItem("userAnswers");
    return storedUserAnswers ? JSON.parse(storedUserAnswers) : [];
  });

  const [score, setScore] = useState(() => {
    const storedScore = sessionStorage.getItem("score");
    return storedScore ? parseInt(storedScore, 10) : 0;
  });

  useEffect(() => {
    sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    sessionStorage.setItem("score", score.toString());
  }, [userAnswers, score]);

  const handleAnswer = (userAnswer, correctAnswer) => {
    const updatedAnswers = [...userAnswers, userAnswer];
    setUserAnswers(updatedAnswers);
    if (userAnswer === correctAnswer) {
      setScore(score + 1);
    }
  };

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h2>Is it a CAT or a DOG?</h2>
        <p>Score: {score}</p>
        <p>Questions Answered: {userAnswers.length}</p>
      </div>
      <Question onAnswer={handleAnswer} />
    </div>
  );
}

export default Quiz;
