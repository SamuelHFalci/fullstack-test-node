import recipes from "../utils/recipes";
export class RecipeDatabase {
  private recipes = recipes;
  find(query?: any) {
    let output: any = [];
    if (!query) return this.recipes;
    else {
      if (query.skip && query.take) {
        output = this.recipes.slice(query.skip, query.take + query.skip);
      } else {
        if (query.skip) {
          output = this.recipes.slice(query.skip);
        }
        if (query.take) {
          output = this.recipes.slice(0, query.take);
        }
      }
    }
    return output;
  }
  count() {
    return this.recipes.length;
  }
}
