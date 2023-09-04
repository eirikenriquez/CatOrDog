import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Question.css";

function Question({ onAnswer }) {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [petImage, setPetImage] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    fetchPetImage();
  }, []);

  const fetchPetImage = () => {
    // Choose between cat or dog image
    const randomNum = Math.random();

    if (randomNum < 0.5) {
      fetchCatImage();
      setCorrectAnswer("cat");
    } else {
      fetchDogImage();
      setCorrectAnswer("dog");
    }
  };

  const fetchDogImage = () => {
    console.log("fetching dog image...");
    setIsImageLoading(true);
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        if (response.data && response.data.message) {
          setPetImage(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  };

  const fetchCatImage = () => {
    console.log("fetching cat image...");
    setIsImageLoading(true);
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        if (response.data && response.data[0] && response.data[0].url) {
          setPetImage(response.data[0].url);
        }
      })
      .catch((error) => {
        console.error("Error fetching cat image:", error);
      });
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleImageError = () => {
    //fetchPetImage();
  };

  return (
    <div className="question">
      <img
        src={petImage}
        alt="Pet"
        className="petImage"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      <div className="answer-buttons">
        <button
          className="cat-button button"
          onClick={() => {
            onAnswer("cat", correctAnswer);
            fetchPetImage();
          }}
          disabled={isImageLoading}
        >
          CAT
        </button>
        <button
          className="dog-button button"
          onClick={() => {
            onAnswer("dog", correctAnswer);
            fetchPetImage();
          }}
          disabled={isImageLoading}
        >
          DOG
        </button>
      </div>
    </div>
  );
}

export default Question;
