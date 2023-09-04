import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="App">
      <header className="app-header">
        <h1>CAT or DOG</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p>Quiz Game created by Eirik Enriquez</p>
      </footer>
    </div>
  );
}

export default Layout;
