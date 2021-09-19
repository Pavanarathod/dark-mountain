import axios from "axios";
import Head from "next/head";
import Hero from "../components/Hero";
import MainLayout from "../components/MainLayout";
import Popular from "../components/Popular";
import Trending from "../components/Trending";

export default function Home({ drinks }) {
  return (
    <div>
      <Head>
        <title>dark mountain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <MainLayout>
        <Popular />
        <Trending drinks={drinks} />
      </MainLayout>
    </div>
  );
}

export const getStaticProps = async () => {
  const trendingData = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
  );

  const drinks = trendingData.data.drinks;

  return {
    props: {
      drinks,
    },
  };
};
