import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchIngredients = () => axios.get(`${API_URL}/ingredients`);
export const addIngredient = (name) => axios.post(`${API_URL}/ingredients`, { name });
export const deleteIngredient = (id) => axios.delete(`${API_URL}/ingredients/${id}`);
export const updateIngredient = (id, name) => axios.put(`${API_URL}/ingredients/${id}`, { name });
