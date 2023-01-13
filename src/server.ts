import express from "express";
import { RecipeDatabase } from "./recipes/recipe-database";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.get("/api/recipes", (req, res) => {
  const recipeDatabase = new RecipeDatabase();
  const recipes = recipeDatabase.find();
  res.status(200).json(recipes);
});
app.listen(port, () => {
  console.log(`Recipes app listening at http://localhost:${port}`);
});
