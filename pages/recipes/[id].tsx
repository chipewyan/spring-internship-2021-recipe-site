import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout"

import { Recipe } from "../../lib/recipe";
import { fetchRecipe } from "../../api/api"

type Props = {
  recipe: Recipe;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const recipeId = Number(context.query.id);
    const recipe = await fetchRecipe(recipeId);
    return {
        props: {
            recipe,
        }
    }
}

const RecipePage: NextPage<Props> = ({ recipe }) => {
    return (
        <Layout>
            <h1>{recipe.title}</h1>
            <img src={recipe.image_url} width="400" />
            <hr />
            <ul>
                <li>作者: {recipe.author.user_name}</li>
                <li>投稿日時: {recipe.published_at}</li>
                <li>説明: {recipe.description}</li>
            </ul>
            <hr />
            <h2>材料</h2>
            <ul>
                {recipe.ingredients.map(ingredient => <li>{ingredient.name} ({ingredient.quantity})</li>)}
            </ul>
            <hr />
            <h2>作り方</h2>
            <ol>
                {recipe.steps.map(step => <li>{step}</li>)}
            </ol>
        </Layout>
    )
}

/*
return (
    <div>
      <h1>My Recipe Site</h1>

      {recipe && (
        <main>
          <h2>{recipe.title}</h2>

          {recipe.image_url && (
            <img src={recipe.image_url} alt="レシピ画像" width="300" />
          )}

          <p>{recipe.description}</p>

          <h3>材料</h3>
          <ol>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>
                {ing.name} : {ing.quantity}
              </li>
            ))}
          </ol>

          <h3>手順</h3>
          <ol>
            {recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </main>
      )}
    </div>
  );
};
*/

export default RecipePage;