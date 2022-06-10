import React from 'react';
import "./Recipe.css";

function Recipe(props) {
  const { label, calories, image } = props.recipe;
  const caloriesSort = calories.toFixed(2);
  return (
    <div className='recipe'>
      <h1>{label}</h1>
      <p>Calorie: {caloriesSort}</p>
      <img src={image} alt={label} />
    </div>
  )
}

export default Recipe;