import classNames from "classnames";
import * as React from "react";


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
const SwiperButton = ({ children }: Props) => {
  const swiperButtonClasses = classNames(
    "bg-green-600 hover:bg-green-700 active:bg-green-500 flex justify-center items-center w-11 h-11 rounded-full"
  );

  return (
    <button className={swiperButtonClasses}>
      {children}
    </button>
  );
};

export default SwiperButton;
