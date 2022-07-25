import type { NextPage } from "next";
import Button from "../src/components/custom/Button";
import Layout from "../src/components/Layout";
import Head from "next/head";
import NewsLetter from "../src/components/custom/NewsLetter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import hero1 from "../src/assets/imgs/Main-imgs.png";
import hero2 from "../src/assets/imgs/hero2.png";
import hero3 from "../src/assets/imgs/hero3.png";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>کندی شاپ | صفحه اصلی</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="container mx-auto flex flex-grow relative">
          <section className=" mt-11 flex items-center justify-around hero mb-28">
            <div className="w-1/3 z-10">
              <h1 className="text-red-600 text-4xl mb-4 font-bold leading-loose  z-20">
                <span className="ml-1 text-yellow-300 hero-title">
                  لورم ایپسوم{" "}
                </span>
                متن ساختگی
                <br /> با تولید سادگی نامفهوم
              </h1>
              <p className="mb-11">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                است
              </p>
              <Button variant="primary">مشاهده</Button>
            </div>
            <div>
              <Swiper
                className="h-[31rem] w-full"
                direction="vertical"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
              >
                <SwiperSlide>
                  <Image src={hero1} width={636} height={484} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={hero2} width={636} height={484} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={hero3} width={636} height={484} />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <NewsLetter />
        </main>
      </Layout>
    </>
  );
};

export default Home;
