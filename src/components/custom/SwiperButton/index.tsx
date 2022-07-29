import * as React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNextButton = () => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>بعدی</button>;
};

export const SwiperPrevButton = () => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>قبلی</button>;
};
