import * as React from "react";
import { ReactElement, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactElement;
}

const IconButton = ({ children }: Props) => {
  const [animationEffect, setAnimationEffext] = React.useState(false);
  return (
    <div
      className={`flex justify-center items-center rounded-full bg-red-500 w-[3.75rem] h-[3.75rem] cursor-pointer hover:bg-red-400 transition-colors duration-500 ease-in-out hover:animate-spinOnce ${
        animationEffect && "animate-slideDown"
      } `}
    >
      {children}
    </div>
  );
};

export default IconButton;
