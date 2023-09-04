import React from "react";
import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>CAT or DOG</h1>
      </header>
      <main className="app-main">
        <Quiz />
      </main>
      <footer className="app-footer">
        <p>Quiz Game created by Eirik Enriquez</p>
      </footer>
    </div>
  );
}

export default App;
