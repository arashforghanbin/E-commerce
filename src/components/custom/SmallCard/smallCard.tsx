import * as React from "react";
import Image from "next/image";
import Star from "../../../assets/icons/Star";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  hasDiscount?: boolean;
  productName: string;
  initialPrice: number;
  imgLink: string;
  imgAlt: string;
  discountPrice?: number;
  discountAmount?: number;
}

const SmallCard = ({
  productName,
  hasDiscount,
  initialPrice,
  imgLink,
  imgAlt,
  discountPrice,
  discountAmount,
  ...props
}: Props) => {
  const discountBadgeClasses = classNames(
    hasDiscount
      ? "absolute left-0 text-white font-bold flex justify-center text-sm items-center bg-green-600 w-10 h-7 rounded-br-md"
      : "hidden"
  );

  const discountPriceClasses = classNames(
    "text-black",
    hasDiscount ? "block" : "hidden"
  );

  const intitalPriceClasses = classNames(
    hasDiscount ? "line-through text-gray mb-2" : "text-black mb-8"
  );

  return (
    <div
      className="bg-white flex flex-col gap-2 w-64 shadow-md rounded-lg p-2 cursor-pointer h-[18.25rem]"
      {...props}
    >
      <div className="relative rounded-md overflow-hidden h-[12rem]">
        <span className=" absolute w-full h-full z-10 bg-gradient-to-tl from-[#dc3b3535]">
          {hasDiscount ? (
            <span className={discountBadgeClasses}>{discountAmount}%</span>
          ) : (
            ""
          )}
        </span>
        <Image
          className="overflow-hidden hover:scale-150"
          src={imgLink}
          alt={imgAlt}
          width={256}
          height={190}
        />
      </div>
      <p className="text-xl font-bold text-black">{productName}</p>
      <div className="flex justify-between">
        <div>
          <p className={intitalPriceClasses}>{initialPrice}</p>
          {hasDiscount ? (
            <p className={discountPriceClasses}>{discountPrice}</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-2 self-end">
          <span className="text-black font-bold">4.5</span>
          <Star />
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
