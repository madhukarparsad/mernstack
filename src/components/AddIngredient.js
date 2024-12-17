import React, { useState } from "react";
import { addIngredient } from "../api";

const AddIngredient = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newIngredient = await addIngredient(name);
    onAdd(newIngredient.data);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add an ingredient"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddIngredient;
