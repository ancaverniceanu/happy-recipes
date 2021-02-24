import { useContext } from 'react';
import { IIngredient } from '../types';
import { RecipeContext } from '../App';

interface IRecipeIngredientEdit {
  ingredient: IIngredient;
  handleIngredientChange: (id: string, ingredient: IIngredient) => void;
  handleIngredientDelete: (id: string) => void;
}

const RecipeIngredientEdit = ({
  ingredient,
  handleIngredientChange,
  handleIngredientDelete,
}: IRecipeIngredientEdit) => {
  const { id, name, amount } = ingredient;
  const { labels } = useContext(RecipeContext);
  const { amount: amountLabel, name: nameLabel } = labels;

  function handleChange(changes: {}) {
    handleIngredientChange(id, { ...ingredient, ...changes });
  }

  return (
    <div className="flex flex-wrap mb-4">
      <div className="w-full md:w-1/6 mr-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="amount"
        >
          {amountLabel}
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          type="text"
          value={amount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ amount: e.target.value })
          }
        />
      </div>
      <div className="w-full md:w-1/2 mr-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="instructions"
        >
          {nameLabel}
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ name: e.target.value })
          }
        />
      </div>
      <div className="w-full md:w-1/4">
        <button
          type="button"
          className="rounded-full focus:outline-none focus:shadow-outline inline-flex p-2 shadow"
          onClick={() => handleIngredientDelete(id)}
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
    </div>
  );
};

export default RecipeIngredientEdit;
