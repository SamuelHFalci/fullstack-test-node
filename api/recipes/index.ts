import { RecipeDatabase } from "../../src/recipes/recipe-database";
import { allowCors } from "../../src/utils/allow-cors";
const handler = (req: any, res: any) => {
  const { start, length } = req.query;
  const recipeDatabase = new RecipeDatabase();
  let recipes;
  if (start && length) {
    recipes = recipeDatabase.find({ skip: +start, take: +length });
  } else recipes = recipeDatabase.find();
  res.status(200).json({ recordsTotal: recipeDatabase.count(), data: recipes });
};

export default allowCors(handler);
