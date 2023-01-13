export type RecipeCreationProps = {
  Name: string;
  url: string;
  Description: string;
  Author: string;
  Ingredients: string[];
  Method: string[];
};
export class Recipe {
  private Name: string;
  private _url: string;
  private Description: string;
  private Author: string;
  private Ingredients: string[];
  private Method: string[];

  constructor(props: RecipeCreationProps) {
    this.Name = props.Name;
    this._url = props.url;
    this.Description = props.Description;
    this.Author = props.Author;
    this.Ingredients = props.Ingredients;
    this.Method = props.Method;
  }

  get name() {
    return this.Name;
  }

  get url() {
    return this._url;
  }

  get description() {
    return this.Description;
  }

  get author() {
    return this.Author;
  }

  get ingredients() {
    return this.Ingredients;
  }

  get method() {
    return this.Method;
  }

  toJson() {
    return {
      Name: this.Name,
      url: this._url,
      Description: this.Description,
      Author: this.Author,
      Ingredients: this.Ingredients,
      Method: this.Method,
    };
  }
}
