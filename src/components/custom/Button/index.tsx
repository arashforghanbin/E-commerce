import classNames from "classnames";
import { ButtonHTMLAttributes, ReactElement } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | ReactElement;
  size?: "lg" | "sm" | "md";
  variant?: "secondary" | "primary";
  fullWidth?: true;
}

const Button = ({
  children,
  className,
  variant,
  fullWidth,
  size = "md",
  ...props
}: Props) => {
  const buttonClasses = classNames(
    "rounded-lg font-bold shadow-lg",
    variant === "primary"
      ? "text-yellow-300 bg-red-600 shadow-red-500"
      : variant === "secondary"
      ? "text-white bg-green-600 "
      : "text-red-600",
    size === "lg"
      ? "text-3xl py-6 px-14"
      : size === "md"
      ? "text-2xl py-4 px-10"
      : "text-xl py-2 px-8",
    fullWidth && "w-full"
  );
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

// "text-2xl text-yellow-300 font-bold  bg-red-600 shadow-md shadow-red-400 py-3 px-10  rounded-lg"
export default Button;
