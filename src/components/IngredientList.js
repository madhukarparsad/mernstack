import React from "react";
import { deleteIngredient } from "../api";

const IngredientList = ({ ingredients, onDelete }) => {
  const handleDelete = async (id) => {
    await deleteIngredient(id);
    onDelete(id);
  };

  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient._id}>
          {ingredient.name}
          <button onClick={() => handleDelete(ingredient._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
