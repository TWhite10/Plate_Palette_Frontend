import React from "react";

function Nav() {
    return (
        <div>
            <header>
                <h1> Plate Palatte </h1>
                <h2>Daily Feast</h2>

                <nav className="nav-bar" aria-label="Main Navigation" role="navigation" >
                    <ul>
                    <li><a href="...">Home</a></li>
                        <li><a href="...">Food Daily</a></li>
                        <li><a href="...">Recipe Drive</a></li>
                        <li><a href="...">On the Street Food</a></li>
                        <li><a href="...">Vegan</a></li>
                        <li><a href="...">About</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Nav;