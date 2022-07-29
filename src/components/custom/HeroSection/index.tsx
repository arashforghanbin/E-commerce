import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "../Button";
import Image from "next/image";
import hero1 from "../../../assets/imgs/Main-imgs.png";
import hero2 from "../../../assets/imgs/Main-imgs.png";
import hero3 from "../../../assets/imgs/Main-imgs.png";

const HeroSection = () => {
  return (
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
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله است
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
  );
};

export default HeroSection;
