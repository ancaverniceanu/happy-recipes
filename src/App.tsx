import React, { useState, useLayoutEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RecipeList from './components/RecipeList';
import RecipeEdit from './components/RecipeEdit';
import { sampleRecipes } from './data/sample-recipes';
import { IRecipe, IRecipeContext } from './types';

export const RecipeContext = React.createContext<Partial<IRecipeContext>>({});

const LOCAL_STORAGE_KEY = 'reactApp.happyRecipes';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedRecipeID, setSelectedRecipeID] = useState('');
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeID
  );

  useLayoutEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON) {
      setRecipes(JSON.parse(recipeJSON));
    }
  }, []);

  useLayoutEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
    labels: {
      addRecipe: 'Add recipe',
    },
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: '',
          amount: '',
        },
      ],
    };
    setSelectedRecipeID(newRecipe.id);
    setRecipes([newRecipe, ...recipes]);
  }

  function handleRecipeDelete(id: string) {
    if (selectedRecipeID && selectedRecipeID === id) {
      setSelectedRecipeID('');
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  function handleRecipeSelect(id: string) {
    setSelectedRecipeID(id);
  }

  function handleRecipeChange(id: string, recipe: IRecipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((recipe) => recipe.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <div className="flex flex-wrap">
        <RecipeList recipes={recipes} />
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
      </div>
    </RecipeContext.Provider>
  );
}

export default App;
