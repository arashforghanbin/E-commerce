import type { NextPage } from "next";
import Layout from "../src/components/Layout";
import Head from "next/head";
import NewsLetter from "../src/components/custom/NewsLetter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Controller } from "swiper";
import SmallCard from "../src/components/custom/SmallCard/smallCard";
import axios from "axios";
import { useEffect, useState } from "react";
import HeroSection from "../src/components/custom/HeroSection";
const URL = "http://localhost:3004/productsList";

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

const Home: NextPage = () => {
  const [controlledSwiper, setControlledSwiper] = useState<any | null>(null);
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

  const handlePrevSlide = () => {
    controlledSwiper.slidePrev();
  };
  const handleNextSlide = () => {
    controlledSwiper.slideNext();
  };
  console.log(controlledSwiper);
  return (
    <>
      <Head>
        <title>کندی شاپ | صفحه اصلی</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="container mx-auto flex flex-col flex-grow relative">
          <HeroSection />

          <section className="flex flex-col gap-8">
            <div className="flex">
              <div>
                <button onClick={() => handlePrevSlide()}>قبلی</button>
                <button onClick={() => handleNextSlide()}>بعدی</button>
              </div>
              <h3 className="text-red-600 text-xl font-bold mx-auto">
                <span className="ml-1 text-yellow-300 favorite">
                  محبوب ترین{" "}
                </span>
                محصولات
              </h3>
            </div>
            <div className="mb-28 bg-red-600 rounded-xl shadow-lg  shadow-red-400 p-4">
              <Swiper
                onSwiper={setControlledSwiper}
                navigation={true}
                slidesPerView={5.5}
                spaceBetween={0}
                className="mySwiper"
                modules={[Navigation, Controller]}
              >
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
