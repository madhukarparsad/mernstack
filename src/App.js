import React, { useEffect, useState } from "react";
import { fetchIngredients } from "./api";
import AddIngredient from "./components/AddIngredient";
import IngredientList from "./components/IngredientList";
import RecipeSuggestions from "./components/RecipeSuggestions";

const App = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      const { data } = await fetchIngredients();
      setIngredients(data);
    };
    getIngredients();
  }, []);

  const handleAddIngredient = (newIngredient) => {
    setIngredients([...ingredients, newIngredient]);
  };

  const handleDeleteIngredient = (id) => {
    setIngredients(ingredients.filter((ing) => ing._id !== id));
  };

  return (
    <div>
      <h1>Recipe Generator & Manager</h1>
      <AddIngredient onAdd={handleAddIngredient} />
      <IngredientList ingredients={ingredients} onDelete={handleDeleteIngredient} />
      <RecipeSuggestions ingredients={ingredients.map((ing) => ing.name)} />
    </div>
  );
};

export default App;
