import React, { FC } from "react";
import { Recipe } from "../lib/recipe"
// import { Header } from "./Header"

type Props = {
    recipes: Recipe[];
}

export const RecipeList: FC<Props> = ({ recipes }) => {
    return (
        <div>
            <ul>
                {recipes.map(recipe => (
                    <li><img src={recipe.image_url} width="300" />
                        <a href={`/recipes/${recipe.id}`}>{recipe.title}</a>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};