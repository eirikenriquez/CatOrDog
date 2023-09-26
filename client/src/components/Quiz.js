import React, { useState, useEffect } from "react";
import Question from "./Question";
import "../styles/Quiz.css";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState(() => {
    const storedUserAnswers = sessionStorage.getItem("userAnswers");
    return storedUserAnswers ? JSON.parse(storedUserAnswers) : [];
  });

  const [score, setScore] = useState(() => {
    const storedScore = sessionStorage.getItem("score");
    return storedScore ? parseInt(storedScore, 10) : 0;
  });

  const [scoreClass, setScoreClass] = useState("");
  const [scoreText, setScoreText] = useState(`Score: ${score}`);

  useEffect(() => {
    sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    sessionStorage.setItem("score", score.toString());
  }, [userAnswers, score]);

  const handleAnswer = (userAnswer, correctAnswer) => {
    const updatedAnswers = [...userAnswers, userAnswer];
    setUserAnswers(updatedAnswers);
    if (userAnswer === correctAnswer) {
      setScore(score + 1);
      setScoreText("Correct! Nice one :^)");
      setScoreClass("score-correct");
      setTimeout(() => {
        setScoreText(`Score: ${score}`);
        setScoreClass("");
      }, 1000);
    } else {
      setScoreText("WRONG! Unlucky 😭");
      setScoreClass("score-wrong");
      setTimeout(() => {
        setScoreText(`Score: ${score}`);
        setScoreClass("");
      }, 1500);
    }
  };

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h2>Is it a CAT or a DOG?</h2>
        <p className={scoreClass}>{scoreText}</p>
        <p>Questions Answered: {userAnswers.length}</p>
      </div>
      <Question onAnswer={handleAnswer} />
    </div>
  );
}

export default Quiz;
