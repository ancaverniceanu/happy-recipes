import React, { useContext } from 'react';
import Recipe from './Recipe';
import { IRecipe } from '../types';
import { RecipeContext } from '../App';

interface IProps {
  recipes: IRecipe[];
}

const RecipeList = ({ recipes }: IProps) => {
  const { handleRecipeAdd, labels } = useContext(RecipeContext);
  const { addRecipe } = labels;

  return (
    <div className="w-full px-3 my-3 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
      {recipes.map((recipe: IRecipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}
      <button
        onClick={handleRecipeAdd}
        className="mr-1 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 border border-green-700 rounded"
      >
        {addRecipe}
      </button>
    </div>
  );
};

export default RecipeList;
