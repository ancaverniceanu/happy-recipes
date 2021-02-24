import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from '../App';
import { IIngredient, IRecipe } from '../types';

interface RecipeEditProps {
  recipe: IRecipe;
}

const RecipeEdit = ({ recipe }: RecipeEditProps) => {
  const { id, name, cookTime, servings, instructions, ingredients } = recipe;
  const { handleRecipeChange, handleRecipeSelect, labels } = useContext(
    RecipeContext
  );
  const {
    name: nameLabel,
    cookTime: cookTimeLabel,
    servings: servingsLabel,
    instructions: instructionsLabel,
    ingredients: ingredientsLabel,
    addIngredient,
  } = labels;

  function handleChange(changes: {}) {
    handleRecipeChange(id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id: string, ingredient: IIngredient) {
    const newIngredients = [...ingredients];
    const index = newIngredients.findIndex(
      (ingredient) => ingredient.id === id
    );
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientsAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: '',
      amount: '',
    };
    handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
  }

  function handleIngredientDelete(id: string) {
    handleChange({
      ingredients: recipe.ingredients.filter(
        (ingredient: IIngredient) => ingredient.id !== id
      ),
    });
  }

  return (
    <div className="w-full px-3 my-3 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
      <div>
        <button
          type="button"
          className="rounded-full focus:outline-none focus:shadow-outline inline-flex p-2 shadow"
          onClick={() => handleRecipeSelect(undefined)}
        >
          <svg
            className="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </button>
      </div>
      <div>
        <div className="w-full mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="label"
          >
            {nameLabel}
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange({ name: e.target.value })
            }
          />
        </div>
        <div className="w-full mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="cookTime"
          >
            {cookTimeLabel}
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            name="cookTime"
            id="cookTime"
            value={cookTime}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange({ cookTime: e.target.value })
            }
          />
        </div>
        <div className="w-full mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="servings"
          >
            {servingsLabel}
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="number"
            min="1"
            name="servings"
            id="servings"
            value={servings}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange({ servings: parseInt(e.target.value) || '' })
            }
          />
        </div>
        <div className="w-full mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="instructions"
          >
            {instructionsLabel}
          </label>
          <textarea
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="instructions"
            name="instructions"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleChange({ instructions: e.target.value })
            }
            value={instructions}
            rows={5}
          />
        </div>
      </div>

      <label className="block mb-2 text-sm font-bold text-gray-700">
        {ingredientsLabel}
      </label>
      {ingredients.map((ingredient: IIngredient) => (
        <RecipeIngredientEdit
          key={ingredient.id}
          ingredient={ingredient}
          handleIngredientChange={handleIngredientChange}
          handleIngredientDelete={handleIngredientDelete}
        />
      ))}
      <button
        className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
        onClick={() => handleIngredientsAdd()}
      >
        {addIngredient}
      </button>
    </div>
  );
};

export default RecipeEdit;
