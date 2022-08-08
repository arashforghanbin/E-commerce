import { ButtonHTMLAttributes, ReactElement } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactElement;
}

export const RoundBtn = ({ children, ...props }: Props) => {
  return (
    <button
      className="bg-red-600 hover:bg-red-700 active:bg-red-500 w-10 h-10 text-2xl text-yellow-300 rounded-full flex items-center justify-center font-bold shadow-sm shadow-red-600"
      {...props}
    >
      {children}
    </button>
  );
};
