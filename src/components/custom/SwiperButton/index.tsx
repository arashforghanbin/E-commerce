import classNames from "classnames";
import * as React from "react";
import SwiperNext from "../../../assets/icons/SwiperNext";
import SwiperPrev from "../../../assets/icons/swiperPrev";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "next" | "prev";
}
const SwiperButton = ({ variant }: Props) => {
  const swiperButtonClasses = classNames(
    "bg-green-600 hover:bg-green-700 active:bg-green-500 flex justify-center items-center w-11 h-11 rounded-full"
  );

  return (
    <button className={swiperButtonClasses}>
      {variant === "next" ? <SwiperNext /> : <SwiperPrev />}
    </button>
  );
};

export default SwiperButton;
