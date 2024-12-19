import React from "react";
import { isLoggedIn, logout } from "../../App";

function Nav() {
  return (
    <div>
      <header>
        <h1> Plate Palatte </h1>
        <h2>Daily Feast</h2>

        <nav className="nav-bar" aria-label="Main Navigation" role="navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            {isLoggedIn() ? (
              <>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/login">Login</a>
                </li>
              </>
            )}
            <li>
              <a href="/recipes">All Recipes</a>
            </li>
            <li>
              <a href="/categories">Categories</a>
            </li>
            <li>
              <a href="/create">Create Recipe</a>
            </li>
            <li>
              <a href="/profile">My Kitchen</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Nav;
