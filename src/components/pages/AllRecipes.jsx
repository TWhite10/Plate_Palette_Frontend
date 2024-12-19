import React from "react";
import { useState, useEffect } from "react";
import RecipeCard from "../recipes/RecipeCard";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:5050/recipes");
        const data = await response.json();
        if (response.ok) {
          setRecipes(data.data);
        } else {
          setError("Failed to load recipes");
        }
      } catch (err) {
        setError("Error loading recipes");
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="recipes-page">
      <h1>All Recipes</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
export default AllRecipes;
