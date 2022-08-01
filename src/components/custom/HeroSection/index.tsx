import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "../Button";
import Image from "next/image";
import hero1 from "../../../assets/imgs/Main-imgs.png";
import hero2 from "../../../assets/imgs/hero2.png";
import hero3 from "../../../assets/imgs/hero3.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center xl:items-start relative xl:flex w-full h-[52rem] xl:h-[31rem] mt-11 ">
      <div className="flex flex-col items-center xl:items-start xl:absolute xl:top-8 xl:z-10 xl:w-1/3">
        <h1 className="text-red-600 text-xl sm:text-4xl leading-loose sm:leading-loose mb-4 font-bold   z-20 text-center xl:text-start">
          <span className="ml-1 text-yellow-300 hero-title">لورم ایپسوم </span>
          متن ساختگی
          <br /> با تولید سادگی نامفهوم
        </h1>
        <p className="text-center xl:text-start  leading-loose mb-11 xl:translate-x-[-8%]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله است
        </p>
        <Button variant="primary">مشاهده</Button>
      </div>
      <Swiper
        className="swiper flex-col xl:w-full items-center justify-between hero mt-8 mb-28"
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
  );
};

export default HeroSection;
