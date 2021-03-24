import { FC, useState } from "react";
import Link from "next/link"

import { GetServerSideProps, NextPage } from "next";
import { Recipe } from "../lib/recipe";
import { fetchRecipes } from "../api/api";
import { RecipeList } from "../components/RecipeList"
import { Layout } from "../components/Layout"

type Props = {
      recipes: Recipe[];
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
      const recipes = await (await fetchRecipes()).recipes;
      return {
            props: {
                  recipes,
            }
      }
}

const TopPage: NextPage<Props> = ({ recipes }) => {
      return (
            <Layout>
                  <RecipeList recipes={recipes} />
            </Layout>
      );
};

export default TopPage;

/*
type Props = {
  recipes: Recipe[];
};

const Home: NextPage<Props> = (props) => {
  const { recipes } = props;

  return (
    <div>
      <h1>My Recipe Site</h1>

      <ul>

export const getStaticProps = async () => {
  const recipes = await getRecipes();
  return {
    props: {
      recipes: recipes,
    },
  };
};

export default Home;

*/