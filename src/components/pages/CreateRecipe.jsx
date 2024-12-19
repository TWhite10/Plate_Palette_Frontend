import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !instructions || !cookTime) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await fetch("http://localhost:5050/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAuthToken()}`,
        },
        body: JSON.stringify({
          title,
          instructions,
          cookTime: Number(cookTime),
          user: "123",
        }),
      });

      if (response.ok) {
        navigate("/recipes");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Error creating recipe");
    }
  };
  return (
    <div className="create-recipe">
      <h2>Create New Recipe</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
            rows="5"
          />
        </div>
        <div>
          <label>Cooking Time (minutes):</label>
          <input
            type="number"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            required
            min="1"
          />
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}

export default CreateRecipe;
