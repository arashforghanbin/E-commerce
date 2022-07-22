import classNames from "classnames";
import { ButtonHTMLAttributes, ReactElement } from "react";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | ReactElement;
  size?: "lg" | "sm" | "md";
  variant?: "secondary" | "primary";
}

const Button: Function = ({
  children,
  className,
  variant,
  size = "md",
  ...props
}: props) => {
  const buttonClasses = classNames(
    "rounded-lg font-bold py-3 px-10 text-2xl",
    variant === "primary"
      ? "text-yellow-300 bg-red-600 shadow-red-400 shadow-md"
      : variant === "secondary"
      ? "text-white bg-green shadow-green shadow-md"
      : "text-red-600"
  );
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

// "text-2xl text-yellow-300 font-bold  bg-red-600 shadow-md shadow-red-400 py-3 px-10  rounded-lg"
export default Button;
