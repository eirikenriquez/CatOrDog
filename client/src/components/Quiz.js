import React, { useState } from "react";
import Question from "./Question";
import "../styles/Quiz.css";

function Quiz() {
  const [answersCount, setAnswersCount] = useState(() => {
    const storedAnswersCount = sessionStorage.getItem("answersCount");
    return storedAnswersCount ? parseInt(storedAnswersCount, 10) : 0;
  });
  const [score, setScore] = useState(() => {
    const storedScore = sessionStorage.getItem("score");
    return storedScore ? parseInt(storedScore, 10) : 0;
  });
  const [resultClass, setResultClass] = useState("");
  const [resultText, setResultText] = useState("");

  const resetData = () => {
    setAnswersCount(0);
    sessionStorage.setItem("answersCount", 0);
    setScore(0);
    sessionStorage.setItem("score", 0);
  };

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
    sessionStorage.setItem("answersCount", (answersCount + 1).toString());

    if (userAnswer === correctAnswer) {
      setScore(score + 1);
      sessionStorage.setItem("score", (score + 1).toString());
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
            Score: {score}{" "}
            {answersCount > 0 ? (
              <span>
                {" "}
                ({((score / answersCount) * 100).toFixed(0)} % correct)
              </span>
            ) : (
              <p></p>
            )}
          </p>
        ) : (
          <p className={resultClass}>{resultText}</p>
        )}
        <p>Questions Answered: {answersCount}</p>
      </div>
      <Question onAnswer={handleAnswer} />
      <div>
        <button className="reset" onClick={resetData}>
          RESET SCORE
        </button>
      </div>
    </div>
  );
}

export default Quiz;
