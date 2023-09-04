import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="App">
      <header className="app-header">
        <h1>CAT or DOG</h1>
        <h2>
          Paws or Claws: Test Your Pet Prowess in the Ultimate CAT or DOG
          Challenge
        </h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Play</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
