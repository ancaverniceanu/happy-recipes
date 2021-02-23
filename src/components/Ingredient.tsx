import { IIngredient } from '../types';

const Ingredient = ({ name, amount }: IIngredient) => {
  return <div>{`${amount} ${name}`}</div>;
};

export default Ingredient;
