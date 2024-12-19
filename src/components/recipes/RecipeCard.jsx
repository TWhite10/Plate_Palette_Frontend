import React from "react";
import { Link } from "react-router-dom";


function RecipeCard({ recipe }) {
    return (
      <div className="recipe-card">
        <h3>{recipe.title}</h3>
        <p>Cooking Time: {recipe.cookTime} minutes</p>
        <p>{recipe.instructions.substring(0, 100)}...</p>
        <Link to={`/recipes/${recipe._id}`}>View Recipe</Link>
      </div>
    );
  }
  
export default RecipeCard;