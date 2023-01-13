import recipes from "../utils/recipes";
export class RecipeDatabase {
  private recipes = recipes;
  find(query?: any) {
    let output;
    if (!query) return this.recipes;
    else {
      if (query.skip && query.take) {
        output = this.recipes.slice(query.skip, query.take + query.skip);
      } else {
        if (query.skip) {
          output = this.recipes.slice(query.skip);
        } else if (query.take) {
          output = this.recipes.slice(0, query.take);
        } else {
          output = this.recipes;
        }
      }
    }
    return this.recipes;
  }
  count() {
    return this.recipes.length;
  }
}
