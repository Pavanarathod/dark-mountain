import Head from "next/head";
import Hero from "../components/Hero";
import MainLayout from "../components/MainLayout";
import Popular from "../components/Popular";

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
      </MainLayout>
    </div>
  );
}
