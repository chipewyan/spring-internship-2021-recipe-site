import { getRecipes, getRecipe } from "../lib/recipe";

// 一個だけ取得

/*
type FetchRecipe = Recipe;

typeof で対応できている？
*/

export async function fetchRecipe(id: number): Promise<typeof getRecipe> {
    const res = await fetch(`https://internship-recipe-api.ckpd.co/recipes/${id}`,
    {
        headers: { 'X-Api-Key':process.env.APIKEY },
    });
    const recipe = ((await res.json()) as unknown) as typeof getRecipe;
    return recipe;
}

// 全部取得

/*
type FetchRecipes = {
    recipes: Recipe[];
  };

typeof で対応できている？
 */
  
  export async function fetchRecipes(
    page?: number,
    id?: number[]
  ): Promise<typeof getRecipes> {
    const qs = new URLSearchParams(
      removeUndefineds({
        page,
        id,
      })
    ).toString();
    const res = await fetch(
      `https://internship-recipe-api.ckpd.co/recipes?${qs}`,
      {
        headers: { "X-Api-Key":process.env.APIKEY },
      }
    );
    const recipes = ((await res.json()) as unknown) as typeof getRecipes ; // unknown とか挿入必要？
    return recipes;
  }
  
  function removeUndefineds(
    obj: Record<string, unknown>
  ): Record<string, string> {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== undefined) {
        newObj[key] = obj[key].toString(); // TODO: KUSO CASTING HERE
      }
    });
    return newObj;
  }

// API取得
/*
(async() => {
    const res = await fetch('https://internship-recipe-api.ckpd.co/recipes', {
      headers: { 'X-Api-Key':process.env.APIKEY }
    });
    const recipes = await res.json();
    console.log(recipes);
  })();
*/