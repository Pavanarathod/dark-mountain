import axios from "axios";
import Head from "next/head";
import Hero from "../components/Hero";
import MainLayout from "../components/MainLayout";
import Popular from "../components/Popular";
import Story from "../components/Story";
import Title from "../components/Title";
import Trending from "../components/Trending";

export default function Home() {
  return (
    <div>
      <Head>
        <title>dark mountain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <MainLayout>
        <Popular />
        <Title spantitle="Spirits">Trending</Title>
        <Trending />
        <Story />
        <div className="h-screen">one</div>
      </MainLayout>
    </div>
  );
}
