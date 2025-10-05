import React from "react";
import { useState, useEffect } from "react";   
import data from "../data.json";
const Homepage = () => {
    const [recipes ,setRecipes] = useState([]);
    useEffect(()=>{
        setRecipes(data);
    },[]);
    return(
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-2xl font-bold mb-4">Recipe Sharing Platform</h1>
            <div className="recipe-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipe-card bg-white p-4 rounded shadow">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover mb-2 rounded" />
                        <h2 className="text-lg font-semibold">{recipe.title}</h2>
                        <p className="text-gray-600">{recipe.summary}</p>
                         <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                View Recipe
              </button>
                    </div>
                ))}
            </div>
        </div>
        
    );
}

export default Homepage;