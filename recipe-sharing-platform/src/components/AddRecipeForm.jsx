import { useState } from "react";

const AddRecipeForm = () => {
  // State to store form inputs
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !ingredients || !steps) {
      setError("Please fill in all fields before submitting.");
      setSuccess(false);
      return;
    }

    const ingredientList = ingredients
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);

    if (ingredientList.length < 2) {
      setError("Please include at least two ingredients.");
      setSuccess(false);
      return;
    }

    // Mock new recipe data
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientList,
      instructions: steps.split(".").map((step) => step.trim()),
    };

    console.log("✅ Recipe Submitted:", newRecipe);

    // Clear form after success
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          🍳 Add a New Recipe
        </h1>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {error}
          </p>
        )}
        {success && (
          <p className="bg-green-100 text-green-600 p-2 rounded mb-4 text-sm">
            Recipe added successfully! 🎉
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Ingredients (comma separated)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g., Eggs, Flour, Milk"
              rows="3"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Steps */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Preparation Steps
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder="Write each step separated by a period."
              rows="4"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-all"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
