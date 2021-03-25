import { Recipe } from "../lib/recipe";

{/* CREATED BASED ON osyooyu san'S CODE */}

type FetchRecipeResponse = Recipe;

export async function fetchRecipe(id: number): Promise<FetchRecipeResponse> {
    const res = await fetch(`https://internship-recipe-api.ckpd.co/recipes/${id}`,
    {
        headers: { 'X-Api-Key':process.env.APIKEY },
    });
    const recipe = ((await res.json()) as unknown) as FetchRecipeResponse;
    return recipe;
}

type FetchRecipesResponse = {
    recipes: Recipe[];
  };
  
export async function fetchRecipes(
    page?: number,
    id?: number[]
  ): Promise<FetchRecipesResponse> {
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
    const recipes = ((await res.json()) as unknown) as FetchRecipesResponse ;
    return recipes;
  }
  
  function removeUndefineds(
    obj: Record<string, unknown>
  ): Record<string, string> {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== undefined) {
        newObj[key] = obj[key].toString(); 
      }
    });
    return newObj;
  }

{/* API取得 */}
{/*
(async() => {
    const res = await fetch('https://internship-recipe-api.ckpd.co/recipes', {
      headers: { 'X-Api-Key':process.env.APIKEY }
    });
    const recipes = await res.json();
    console.log(recipes);
  })();
*/}