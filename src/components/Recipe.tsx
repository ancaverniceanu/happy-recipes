import React, { useContext } from 'react';
import { IRecipe } from '../types';
import IngredientList from './IngredientList';
import { RecipeContext } from '../App';

const Recipe = ({
  id,
  name,
  cookTime,
  servings,
  instructions,
  ingredients,
}: IRecipe) => {
  const { handleRecipeDelete, handleRecipeSelect, labels } = useContext(
    RecipeContext
  );
  const {
    edit,
    delete: deleteLabel,
    cookTime: cookTimeLabel,
    servings: servingsLabel,
    instructions: instructionsLabel,
    ingredients: ingredientsLabel,
  } = labels;
  return (
    <div className="mb-10">
      <h3 className="my-3 text-xl font-bold">{name}</h3>
      <div>
        <button
          onClick={() => handleRecipeSelect(id)}
          className="mr-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-500 hover:border-green-700 rounded"
        >
          {edit}
        </button>
        <button
          onClick={() => handleRecipeDelete(id)}
          className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
        >
          {deleteLabel}
        </button>
      </div>
      <div>
        <strong>{cookTimeLabel}: </strong>
        <span>{cookTime}</span>
      </div>
      <div>
        <strong>{servingsLabel}: </strong>
        <span>{servings}</span>
      </div>
      <div>
        <strong>{instructionsLabel}: </strong>
        <div>{instructions}</div>
      </div>
      <div>
        <strong>{ingredientsLabel}: </strong>
        <div>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
