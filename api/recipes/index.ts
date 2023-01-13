import { RecipeDatabase } from "../../src/recipes/recipe-database";
import { allowCors } from "../../src/utils/allow-cors";
const handler = (req: any, res: any) => {
  const recipeDatabase = new RecipeDatabase();
  const recipes = recipeDatabase.find();
  res.status(200).json({ recordsTotal: recipeDatabase.count(), data: recipes });
};
export default allowCors(handler);
