import React from "react";
import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>CAT or NOT</h1>
      </header>
      <main className="app-main">
        <Quiz />
      </main>
      <footer className="app-footer">
        <p>Created with love for cats</p>
      </footer>
    </div>
  );
}

export default App;
