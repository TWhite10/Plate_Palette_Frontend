import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:5050/recipes/${id}`);
        const data = await response.json();
        if (response.ok) {
          setRecipe(data.data);
        } else {
          setError("Recipe not found");
        }
      } catch (err) {
        setError("Error loading recipe");
      }
    };
    fetchRecipe();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!recipe) return <div>Loading...</div>;
  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <p>Cooking Time: {recipe.cookTime} minutes</p>
      <div>
        <h3>Instructions:</h3>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}
export default RecipeDetail;
