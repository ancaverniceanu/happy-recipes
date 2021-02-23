import Ingredient from './Ingredient';
import { IIngredient } from '../types';

interface IngredientListProps {
  ingredients: IIngredient[];
}

export const IngredientList = ({ ingredients }: IngredientListProps) => {
  const ingredientsElements = ingredients.map((ingredient: IIngredient) => (
    <Ingredient key={ingredient.id} {...ingredient} />
  ));
  return <div>{ingredientsElements}</div>;
};

export default IngredientList;
