import React, { useState } from "react";
import Question from "./Question";
import "../styles/Quiz.css";

function Quiz() {
  const [answersCount, setAnswersCount] = useState(0);
  const [score, setScore] = useState(0);
  const [resultClass, setResultClass] = useState("");
  const [resultText, setResultText] = useState("");

  const updateScoreDisplay = (resultText, resultClass, timeoutDuration) => {
    // show correct/wrong message depending on answer
    setResultText(resultText);
    setResultClass(resultClass);

    // display score after
    setTimeout(() => {
      setResultText("");
      setResultClass("");
    }, timeoutDuration);
  };

  const handleAnswer = (userAnswer, correctAnswer) => {
    setAnswersCount(answersCount + 1);

    if (userAnswer === correctAnswer) {
      setScore(score + 1);
      updateScoreDisplay("Correct! Nice one :^)", "answer-correct", 1000);
    } else {
      updateScoreDisplay("WRONG! Unlucky 😭", "answer-wrong", 1500);
    }
  };

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h2>Is it a CAT or a DOG?</h2>
        {resultText === "" ? (
          <p>
            Score: {score} ({((score / answersCount) * 100).toFixed(0)}%
            correct)
          </p>
        ) : (
          <p className={resultClass}>{resultText}</p>
        )}
        <p>Questions Answered: {answersCount}</p>
      </div>
      <Question onAnswer={handleAnswer} />
    </div>
  );
}

export default Quiz;
