import type { NextPage } from "next";
import Button from "../src/components/custom/Button";
import Layout from "../src/components/Layout";
import Head from "next/head";
import NewsLetter from "../src/components/custom/NewsLetter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper";
import hero1 from "../src/assets/imgs/Main-imgs.png";
import hero2 from "../src/assets/imgs/hero2.png";
import hero3 from "../src/assets/imgs/hero3.png";
import Image from "next/image";
import SmallCard from "../src/components/custom/SmallCard/smallCard";
import axios from "axios";
import { useEffect } from "react";
import { sortByFavorite } from "../src/utils";
import {
  SwiperNextButton,
  SwiperPrevButton,
} from "../src/components/custom/SwiperButton";
const URL = "http://localhost:3004/productsList";

const Home: NextPage = () => {
  interface Product {
    id: string;
    productName: string;
    price: number;
    category: string;
    file: string;
    discount: number;
    clicked: number;
    bought: number;
    taste: string;
    engName: string;
    weight: number;
  }
  let tenFavProducts: {}[];

  const handleGetData = async () => {
    const { data } = await axios.get(URL);
    const sortedByFavorite = data.sort(
      (a: Product, b: Product) => b.bought - a.bought
    );
    tenFavProducts = sortedByFavorite.slice(0, 10);
    console.log(tenFavProducts);
  };

  useEffect(() => {
    handleGetData();
  });

  return (
    <>
      <Head>
        <title>کندی شاپ | صفحه اصلی</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="container mx-auto flex flex-col flex-grow relative">
          <section className="w-full">
            <Swiper
              className="h-[31rem] w-full mt-11 flex  items-center justify-between flex-row-reverse hero mb-28"
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
              <div className="w-1/3 z-10">
                <h1 className="text-red-600 text-4xl mb-4 font-bold leading-loose  z-20">
                  <span className="ml-1 text-yellow-300 hero-title">
                    لورم ایپسوم{" "}
                  </span>
                  متن ساختگی
                  <br /> با تولید سادگی نامفهوم
                </h1>
                <p className="leading-loose mb-11 translate-x-[-8%]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله است
                </p>
                <Button variant="primary">مشاهده</Button>
              </div>
              <div>
                <SwiperSlide className="hero-slides">
                  <Image src={hero1} width={636} height={484} />
                </SwiperSlide>
                <SwiperSlide className="hero-slides">
                  <Image src={hero2} width={636} height={484} />
                </SwiperSlide>
                <SwiperSlide className="hero-slides">
                  <Image src={hero3} width={636} height={484} />
                </SwiperSlide>
              </div>
            </Swiper>
          </section>

          <section className="flex flex-col gap-8">
            <h3 className="text-red-600 text-xl font-bold mx-auto">
              <span className="ml-1 text-yellow-300 favorite">محبوب ترین </span>
              محصولات
            </h3>
            <div className="mb-28 bg-red-600 rounded-xl shadow-lg  shadow-red-400 p-4">
              <Swiper slidesPerView={5.5} spaceBetween={0} className="mySwiper">
                <SwiperNextButton />
                <SwiperPrevButton />

                <SwiperSlide>
                  <SmallCard
                    productName="اسمارتیز خوشمزه"
                    imgLink="https://abnabat-choobi.com/api/ui/image/watermark?path=/uploads/product/r65_3.jpg&etype=product"
                    imgAlt="NESTELE COFFEE MATE CHOCOLATE CREAM FREE GUTEN"
                    initialPrice={10000}
                    hasDiscount
                    discountAmount={20}
                    discountPrice={1000}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SmallCard
                    productName="اسمارتیز خوشمزه"
                    imgLink="https://abnabat-choobi.com/api/ui/image/watermark?path=/uploads/product/r65_3.jpg&etype=product"
                    imgAlt="NESTELE COFFEE MATE CHOCOLATE CREAM FREE GUTEN"
                    initialPrice={10000}
                    hasDiscount
                    discountAmount={20}
                    discountPrice={1000}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SmallCard
                    productName="اسمارتیز خوشمزه"
                    imgLink="https://abnabat-choobi.com/api/ui/image/watermark?path=/uploads/product/r65_3.jpg&etype=product"
                    imgAlt="NESTELE COFFEE MATE CHOCOLATE CREAM FREE GUTEN"
                    initialPrice={10000}
                    hasDiscount
                    discountAmount={20}
                    discountPrice={1000}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SmallCard
                    productName="اسمارتیز خوشمزه"
                    imgLink="https://abnabat-choobi.com/api/ui/image/watermark?path=/uploads/product/r65_3.jpg&etype=product"
                    imgAlt="NESTELE COFFEE MATE CHOCOLATE CREAM FREE GUTEN"
                    initialPrice={10000}
                    hasDiscount
                    discountAmount={20}
                    discountPrice={1000}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SmallCard
                    productName="اسمارتیز خوشمزه"
                    imgLink="https://abnabat-choobi.com/api/ui/image/watermark?path=/uploads/product/r65_3.jpg&etype=product"
                    imgAlt="NESTELE COFFEE MATE CHOCOLATE CREAM FREE GUTEN"
                    initialPrice={10000}
                    hasDiscount
                    discountAmount={20}
                    discountPrice={1000}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SmallCard
                    productName="اسمارتیز خوشمزه"
                    imgLink="https://abnabat-choobi.com/api/ui/image/watermark?path=/uploads/product/r65_3.jpg&etype=product"
                    imgAlt="NESTELE COFFEE MATE CHOCOLATE CREAM FREE GUTEN"
                    initialPrice={10000}
                    hasDiscount
                    discountAmount={20}
                    discountPrice={1000}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SmallCard
                    productName="اسمارتیز خوشمزه"
                    imgLink="https://abnabat-choobi.com/api/ui/image/watermark?path=/uploads/product/r65_3.jpg&etype=product"
                    imgAlt="NESTELE COFFEE MATE CHOCOLATE CREAM FREE GUTEN"
                    initialPrice={10000}
                    hasDiscount
                    discountAmount={20}
                    discountPrice={1000}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SmallCard
                    productName="اسمارتیز خوشمزه"
                    imgLink="https://abnabat-choobi.com/api/ui/image/watermark?path=/uploads/product/r65_3.jpg&etype=product"
                    imgAlt="NESTELE COFFEE MATE CHOCOLATE CREAM FREE GUTEN"
                    initialPrice={10000}
                    hasDiscount
                    discountAmount={20}
                    discountPrice={1000}
                  />
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
