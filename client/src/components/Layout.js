import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="App">
      <header className="app-header">
        <h1>CAT or DOG</h1>
        <h2>
          Paws or Claws: Test Your Pet Prowess in the Ultimate CAT or DOG Quiz
        </h2>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active-link" : ""}
              >
                Play
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active-link" : ""}
              >
                About
              </Link>
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
