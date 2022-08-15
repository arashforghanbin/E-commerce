import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactElement,
} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" | "number" | "email";
  name: string;
  childOne?: ReactElement;
}

const CustomInput: ForwardRefRenderFunction<HTMLInputElement, Props> = ({
  childOne,
  type,
  name,
  ...props
}: Props) => {
  return (
    <div className="flex items-center">
      <span className="absolute px-3">{childOne}</span>
      <input
        className="h-12 bg-yellow-300 w-72 pl-4 pr-12 mb-1 rounded-lg border border-gray focus:border-red-600 placeholder:text-gray focus:placeholder:text-red-600"
        autoComplete="off"
        name={name}
        type={type}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
