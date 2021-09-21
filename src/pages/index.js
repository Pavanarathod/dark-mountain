import axios from "axios";
import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Location from "../components/Location";
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
      </MainLayout>
      <Location />
      <Footer />
    </div>
  );
}
