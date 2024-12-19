import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateRecipe() {
    const [title, setTitle] = useState("");
    const [instructions, setInstructions] = useState("");
    const [cookTime, setCookTime] = useState("");
    const navigate = useNavigate();
}
export default CreateRecipes;