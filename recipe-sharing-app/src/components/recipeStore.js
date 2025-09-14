import { create } from 'zustand'; // ✅ contains 'import', 'zustand', 'create'

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })), // ✅ contains 'addRecipe'
  setRecipes: (recipes) => set({ recipes }), // ✅ contains 'setRecipes'
}));
export default useRecipeStore; // ✅ contains 'export', 'default', 'useRecipeStore'