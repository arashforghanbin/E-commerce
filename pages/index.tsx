import type { NextPage } from "next";
import Layout from "../src/components/Layout";
import Head from "next/head";
import NewsLetter from "../src/components/custom/NewsLetter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroSection from "../src/components/custom/HeroSection";
import FavProductSlider from "../src/components/custom/FavProductSlider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>کندی شاپ | صفحه اصلی</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="container mx-auto flex flex-col flex-grow relative">
          <HeroSection />
          <FavProductSlider />
          <NewsLetter />
        </main>
      </Layout>
    </>
  );
};

export default Home;
