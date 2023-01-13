import recipes from "../utils/recipes";
export class RecipeDatabase {
  private recipes = recipes;
  find(query?: any) {
    if (!query) return this.recipes;
    else {
      if (query.skip && query.take) {
        this.recipes = this.recipes.slice(query.skip, query.take);
      } else {
        if (query.skip) {
          this.recipes = this.recipes.slice(query.skip);
        }
        if (query.take) {
          this.recipes = this.recipes.slice(0, query.take);
        }
      }
    }
    return this.recipes;
  }
  count() {
    return this.recipes.length;
  }
}
