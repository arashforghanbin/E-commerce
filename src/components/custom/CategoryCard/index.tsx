import * as React from "react";
import Image from "next/image";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  description: string;
  img: string;
}

const categoryCard = ({ value, description, img, ...props }: Props) => {
  return (
    <div
      className="bg-white flex flex-col items-center gap-6 w-64 shadow-md rounded-lg p-2 cursor-pointer h-[18.25rem]"
      {...props}
    >
      <div className="relative rounded-md overflow-hidden h-[12rem]">
        <span className=" absolute w-full h-full z-10 bg-gradient-to-tl from-[#dc3b3535]"></span>
        <Image
          className="overflow-hidden hover:scale-150"
          src={img}
          alt={value}
          width={256}
          height={210}
        />
      </div>
      <p className="text-xl font-bold text-black">{description}</p>
    </div>
  );
};

export default categoryCard;
