import type { NextPage } from "next";
import Layout from "../src/components/Layout";
import Head from "next/head";
import NewsLetter from "../src/components/custom/NewsLetter";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroSection from "../src/components/custom/HeroSection";
import FavProductSlider from "../src/components/custom/FavProductSlider";
import HomeMidSection from "../src/components/custom/HomeMidSection";
import ProductCategoriesSlider from "../src/components/custom/ProductCategoriesSlider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>کندی شاپ | صفحه اصلی</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="container px-10 mx-auto flex flex-col flex-grow relative">
          <HeroSection />
          <FavProductSlider />
          <HomeMidSection />
          <ProductCategoriesSlider />
          <NewsLetter />
        </main>
      </Layout>
    </>
  );
};

export default Home;
