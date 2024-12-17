// import React, { useState } from "react";

// const RecipeSuggestions = ({ ingredients }) => {
//   const [recipes, setRecipes] = useState([]);

//   const getRecipes = async () => {
//     const response = await fetch("https://api.openai.com/v1/recipes", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `AIzaSyAc49hvoQrPzaCAXMVyg9nGo1GwceL-cqE`,
//       },
//       body: JSON.stringify({ ingredients }),
//     });
//     const data = await response.json();
//     setRecipes(data.recipes);
//   };

//   return (
//     <div>
//       <button onClick={getRecipes}>Get Recipes</button>
//       <ul>
//         {recipes.map((recipe, index) => (
//           <li key={index}>{recipe}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RecipeSuggestions;
import React, { useState } from "react";

const RecipeSuggestions = ({ ingredients }) => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.example.com/recipes?ingredients=${ingredients.join(",")}&key=AIzaSyAc49hvoQrPzaCAXMVyg9nGo1GwceL-cqE`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error.message);
    }
  };

  return (
    <div>
      <button onClick={getRecipes}>Get Recipes</button>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>{recipe}</li>
          ))}
        </ul>
      ) : (
        <p>No recipes found. Try different ingredients!</p>
      )}
    </div>
  );
};

export default RecipeSuggestions;
