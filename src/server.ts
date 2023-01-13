import express from "express";
import { RecipeDatabase } from "./recipes/recipe-database";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.get("/api/recipes", (req, res) => {
  console.log(req.query);
  const { start, length } = req.query;
  const recipeDatabase = new RecipeDatabase();
  let recipes;
  if (start && length) {
    recipes = recipeDatabase.find({ skip: +start, take: +length });
  } else recipes = recipeDatabase.find();
  res.status(200).json({ recordsTotal: recipeDatabase.count(), data: recipes });
});
app.listen(port, () => {
  console.log(`Recipes app listening at http://localhost:${port}`);
});
