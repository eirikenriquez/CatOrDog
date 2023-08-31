import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Question.css";

function Question({ onAnswer }) {
  const [catImage, setCatImage] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    fetchCatImage();
  }, []); // Fetch image when component mounts and whenever answered

  const fetchCatImage = () => {
    setIsImageLoading(true);
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

  const handleImageLoad = () => {
    setIsImageLoading(false); // Image has loaded
  };

  const handleImageError = () => {
    setIsImageLoading(false); // Image load encountered an error
  };

  return (
    <div className="question">
      <img
        src={catImage}
        alt="Cat"
        className="catImage"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      <div className="answer-buttons">
        <button
          onClick={() => {
            onAnswer(true);
            fetchCatImage();
          }}
          disabled={isImageLoading}
        >
          CAT
        </button>
        <button
          onClick={() => {
            onAnswer(false);
            fetchCatImage();
          }}
          disabled={isImageLoading}
        >
          NOT
        </button>
      </div>
    </div>
  );
}

export default Question;
