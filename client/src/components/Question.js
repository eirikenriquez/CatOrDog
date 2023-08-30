import React, { useState, useEffect } from "react";
import axios from "axios";

function Question({ onAnswer }) {
  const [catImage, setCatImage] = useState("");

  useEffect(() => {
    fetchCatImage();
  }, []); // Fetch image when component mounts and whenever answered

  const fetchCatImage = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        if (response.data && response.data[0] && response.data[0].url) {
          setCatImage(response.data[0].url);
        }
      })
      .catch((error) => {
        console.error("Error fetching cat image:", error);
      });
  };

  return (
    <div className="question">
      <img src={catImage} alt="Cat" />
      <div className="answer-buttons">
        <button
          onClick={() => {
            onAnswer(true);
            fetchCatImage();
          }}
        >
          CAT
        </button>
        <button
          onClick={() => {
            onAnswer(false);
            fetchCatImage();
          }}
        >
          NOT
        </button>
      </div>
    </div>
  );
}

export default Question;
