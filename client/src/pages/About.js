import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h2>About the Quiz Game</h2>
      </div>
      <p>
        Welcome to the "Cat or Dog" quiz game! This project was created as a fun
        way to explore frontend development using React while combining a love
        for animals.
      </p>
      <p>
        The game's concept is straightforward: you'll be presented with images,
        and your task is to decide whether the image features a cat or a dog by
        clicking the corresponding button.
      </p>
      <h2>Links:</h2>
      <div className="linksSection">
        <div className="apiSection">
          <h3>APIs used</h3>
          <p>
            As an animal lover, I found it exciting to work with free APIs that
            provide an endless supply of cat and dog images for this project.
          </p>
          <ul>
            <li>
              <a
                href="https://thecatapi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Cat API
              </a>
            </li>
            <li>
              <a
                href="https://dog.ceo/dog-api/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Dog API
              </a>
            </li>
          </ul>
        </div>
        <div className="gitHubSection">
          <h3>GitHub</h3>
          <p>
            This project is a part of my journey in learning frontend
            development, and it's hosted on GitHub. Feel free to explore the
            code and provide feedback.
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/eirikenriquez"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit My GitHub Profile
              </a>
            </li>
            <li>
              <a
                href="https://github.com/eirikenriquez/CatOrDog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit The GitHub Repo For This Site
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>
        Thank you for playing and learning with me! Enjoy the quiz, and may your
        love for animals shine through.
      </p>
    </div>
  );
}

export default About;
