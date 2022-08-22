import * as React from "react";
import Image from "next/image";
import Star from "../../../assets/icons/Star";
import classNames from "classnames";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { add } from "../../../../redux/reducers/cartProductsReducer";
import { textTruncate, toFarsiDigits } from "../../../utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  hasDiscount?: boolean;
  productName: string;
  initialPrice: number;
  imgLink: string;
  imgAlt: string;
  discountPrice?: number;
  discountAmount?: number;
}

const MediumCard = ({
  id,
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

  const dispatch = useDispatch();

  const cartProducts = useSelector(
    (state: RootState) => state.cartProductsReducer.cartProducts
  );

  const foundProduct = cartProducts.find((item) => item.id === id);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (foundProduct) {
      return;
    } else {
      dispatch(
        add({
          id: id,
          imgLink: imgLink,
          productName: productName,
          basePrice: initialPrice,
          hasDiscount: hasDiscount,
          discountAmount: discountAmount,
          quantity: 1,
        })
      );
    }
  };

  return (
    <div
      className="bg-white flex flex-col gap-2 w-64 shadow-md rounded-lg p-2 cursor-pointer"
      {...props}
    >
      <div className="relative rounded-md overflow-hidden">
        <span className=" absolute w-full h-full z-10 bg-gradient-to-tl from-[#dc3b3535]">
          {hasDiscount ? (
            <span className={discountBadgeClasses}>{toFarsiDigits(discountAmount)}%</span>
          ) : (
            ""
          )}
        </span>
        <Image
          className="overflow-hidden hover:scale-150"
          src={imgLink}
          alt={imgAlt}
          width={256}
          height={256}
        />
      </div>
      <p className="text-xl font-bold text-black">
        {textTruncate(productName, 21)}
      </p>
      <div className="flex justify-between">
        <div>
          <p className={intitalPriceClasses}>{toFarsiDigits(initialPrice)}</p>
          {hasDiscount ? (
            <p className={discountPriceClasses}>{toFarsiDigits(discountPrice)}</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-2 self-end">
          <span className="text-black font-bold">۴.۵</span>
          <Star />
        </div>
      </div>
      <Button onClick={(e) => handleAddToCart(e)} variant="secondary" size="sm">
        خرید
      </Button>
    </div>
  );
};

export default MediumCard;
