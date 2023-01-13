import { RecipeDatabase } from '../../backend/recipes/recipe-database';
export default function handler(req: any, res: any) {
  const recipeDatabase = new RecipeDatabase();
  const recipes = recipeDatabase.find();
  res.status(200).json(recipes);
}
