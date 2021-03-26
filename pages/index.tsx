import { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { GetServerSideProps, NextPage } from "next";
import { Recipe } from "../lib/recipe";
import { fetchRecipes } from "../api/api";
import { RecipeList } from "../components/RecipeList";
import Layout from "../components/Layout";

{/*
/* 検索機能 */
/*
export function Index() {
      const router = useRouter(); //ルーターの取得
      const [keyword, setKeyword] = useState(); //検索キーワード

      //ボタンをクリックした時の処理
      const clickButton = () => {
            //未入力の時
            if (!keyword) {
                  return;
            }

            router.push({
                  pathname:"/result", //URL
                  query: {keyword:keyword} //検索クエリ
            });
      }
*/
/*
      return (
            <div>
                  入力項目
                  <input
                        type="text"
                        value={keyword}
                        onChange={e => setKeyword(e.target.value)} //変更時keywordに値をセット
                  />

                  ボタン
                  <button
                        onClick={clickButton}
                        disabled={!keyword}> {/*入力項目が未入力の場合、非活性
                        検索
                  </button>
            </div>
      )
}
*/}

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

{/*
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

*/}