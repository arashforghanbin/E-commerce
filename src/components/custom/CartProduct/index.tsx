import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  add,
  decrement,
  remove,
} from "../../../../redux/reducers/cartProductsReducer";
import Trash from "../../../assets/icons/Trash";
import { discountCalc } from "../../../utils";
import { RoundBtn } from "../RoundBtn";

interface Props {
  id: string;
  imgLink: string;
  productName: string;
  basePrice: number;
  hasDiscount?: boolean;
  discountAmount?: number;
  quantity: number;
  handleTotalPrice: any;
}

const CartProduct = ({
  id,
  imgLink,
  productName,
  basePrice,
  hasDiscount,
  discountAmount,
  quantity,
  handleTotalPrice,
}: Props) => {
  const [totalPriceWithoutCoupon, setTotalPriceWithoutCoupon] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasDiscount) {
      setTotalPriceWithoutCoupon(
        quantity * discountCalc(true, discountAmount, basePrice)
      );
    } else {
      setTotalPriceWithoutCoupon(quantity * basePrice);
    }
  }, [quantity]);

  return (
    <div className="mr-10 bg-white p-7 shadow-lg rounded-lg flex items-start gap-4">
      <div className="bg-[#fff] relative w-1/4 rounded-lg overflow-hidden">
        {hasDiscount && (
          <p className="absolute left-0 z-10 text-white font-bold py-1 px-3  rounded-br-lg  bg-green-600">
            {discountAmount}%
          </p>
        )}
        <Image src={imgLink} height={176} width={176} />
      </div>
      <div className="flex grow flex-col gap-4">
        <h5 className="text-2xl font-bold">{productName}</h5>
        <p
          className={`text-[1rem] text-gray ${
            hasDiscount ? "line-through" : ""
          }`}
        >
          قیمت پایه: {basePrice} تومان
        </p>
        {hasDiscount && (
          <p className="text-gray">
            قیمت با تخفیف: {discountCalc(true, discountAmount, basePrice)} تومان
          </p>
        )}
        <div className="flex items-center">
          <div className="flex grow  items-center gap-4">
            <span className="text-lg">تعداد:</span>
            <div className="flex items-center gap-4">
              <RoundBtn
                onClick={() => {
                  dispatch(
                    add({
                      id,
                      imgLink,
                      productName,
                      basePrice,
                      hasDiscount,
                      discountAmount,
                      quantity,
                    })
                  );
                  handleTotalPrice();
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 15H5M15 25V15V25ZM15 15V5V15ZM15 15H25H15Z"
                    stroke="#FFFCB5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </RoundBtn>
              <span className="font-bold text-xl">{quantity}</span>
              <RoundBtn
                onClick={() => {
                  dispatch(
                    decrement({
                      id,
                      imgLink,
                      productName,
                      basePrice,
                      hasDiscount,
                      discountAmount,
                      quantity,
                    })
                  );
                  handleTotalPrice();
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 15H5"
                    stroke="#FFFCB5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </RoundBtn>
            </div>
          </div>
          <span className="font-bold">
            قیمت کل:{totalPriceWithoutCoupon} تومان
          </span>
        </div>
      </div>
      <div>
        <RoundBtn
          onClick={() => {
            dispatch(
              remove({
                id,
                imgLink,
                productName,
                basePrice,
                hasDiscount,
                discountAmount,
                quantity,
              })
            );
            handleTotalPrice();
          }}
        >
          <Trash />
        </RoundBtn>
      </div>
    </div>
  );
};

export default CartProduct;
