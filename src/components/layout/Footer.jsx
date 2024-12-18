import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <nav className="nav-bar" aria-label="Main Navigation" role="navigation">
          <ul>
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
          <p className="copyright">copyright 2024 &copy;</p>
        </nav>
      </footer>
    </div>
  );
}
export default Footer;
