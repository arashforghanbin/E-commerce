import classNames from "classnames";
import { ButtonHTMLAttributes, ReactElement } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | ReactElement;
  size?: "lg" | "sm" | "md";
  variant?: "secondary" | "primary";
}

const Button = ({ children, variant, size = "md", ...props }: Props) => {
  const buttonClasses = classNames(
    "text-yellow-300 rounded-lg font-bold py-3 px-10 text-2xl bg-red-600"
  );
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

// "text-2xl text-yellow-300 font-bold  bg-red-600 shadow-md shadow-red-400 py-3 px-10  rounded-lg"
export default Button;
