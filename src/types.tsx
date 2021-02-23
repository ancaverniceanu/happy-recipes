export interface IRecipeContext {
  handleRecipeAdd: () => void;
  handleRecipeSelect: any;
  handleRecipeDelete: any;
  handleRecipeChange: any;
  labels: any;
}

export interface IRecipe {
  id: string;
  name: string;
  servings: number;
  cookTime: string;
  instructions: string;
  ingredients: IIngredient[];
}

export interface IIngredient {
  id: string;
  name: string;
  amount: string;
}
