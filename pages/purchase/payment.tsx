import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyProductCart } from "../../redux/reducers/cartProductsReducer";
import { resetTotalCost } from "../../redux/reducers/totalCartPriceReducer";
import { emptyUserInfo } from "../../redux/reducers/userInfoReducer";
import { RootState } from "../../redux/store";
import PurchaseCart from "../../src/assets/icons/PurchaseCart";
import PurchaseDeliver from "../../src/assets/icons/PurchaseDeliver";
import PurchaseDone from "../../src/assets/icons/PurchaseDone";
import PurchaseLine from "../../src/assets/icons/PurchaseLine";
import PurchasePayment from "../../src/assets/icons/PurchasePayment";
import Button from "../../src/components/custom/Button";

const PurchasedProductsURL = "http://localhost:3004/purchasedProducts";

const Payment: NextPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("آنلاین");
  const [paymentPortal, setPaymentPortal] = useState("ملی");

  const router = useRouter();
  const dispatch = useDispatch();

  const totalPrice = useSelector(
    (state: RootState) => state.totalCartPriceReducer.totalPrice
  );

  const cartProducts = useSelector(
    (state: RootState) => state.cartProductsReducer.cartProducts
  );

  const userLoggedIn: any = useSelector(
    (state: RootState) => state.userLoginReducer.userLoggedIn
  );
  console.log(userLoggedIn);

  const userInfo = useSelector(
    (state: RootState) => state.userInfoReducer.userInfo
  );

  const handleFinalizePayment = async () => {
    try {
      await axios.post(PurchasedProductsURL, {
        userName: userLoggedIn.userName,
        recipient: userInfo.recipient,
        purchasedProducts: cartProducts,
        totalPrice: totalPrice,
        status: "در حال پردازش",
        paymentMethod: paymentMethod,
        paymentPortal: paymentPortal,
        orderDate: Date.now(),
      });
      router.push("http://localhost:3000/purchase/doneOrder")
      dispatch(emptyProductCart());
      dispatch(emptyUserInfo());
      dispatch(resetTotalCost());
    } catch (error) {
      console.log("couldn't send data");
    }
  };

  return (
    <main className="container flex flex-col px-10 mx-auto w-full">
      <div className="mt-10 mb-20 flex items-center justify-center w-full gap-8 container">
        <div className="flex flex-col items-center">
          <PurchaseCart color="#73737399" />
          <p className="absolute translate-y-20 font-bold mt-3 text-[#73737399]">
            تایید سبد خرید
          </p>
        </div>
        <PurchaseLine color="#73737399" />
        <div className="flex flex-col items-center">
          <PurchaseDeliver color="#73737399" />
          <p className="absolute translate-y-20 font-bold mt-3 text-[#73737399]">
            انتخاب آدرس
          </p>
        </div>
        <PurchaseLine color="#73737399" />
        <div className="flex flex-col items-center">
          <PurchasePayment />
          <p className="absolute translate-y-20 font-bold mt-3 text-red-600">
            انتخاب شیوه پرداخت
          </p>
        </div>
        <PurchaseLine />
        <div className="flex flex-col items-center">
          <PurchaseDone color="rgba(220,58,53,0.4)" />
          <p className="absolute translate-y-20 font-bold mt-3 text-[rgba(220,58,53,0.4)]">
            اتمام سفارش
          </p>
        </div>
      </div>
      <section className="flex flex-col gap-8 bg-white w-3/4 mx-auto rounded-[2rem] p-10 shadow-xl mb-14">
        <h2 className="text-2xl text-red-600 font-bold">روش های پرداخت</h2>
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">انتخاب نوع پرداخت</h4>
            <div className="flex gap-2">
              <input
                name="paymentType"
                type="radio"
                id="upfront"
                value="نقدی"
                checked={paymentMethod === "نقدی"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="upfront">نقدی</label>
            </div>
            <div className="flex gap-2">
              <input
                name="paymentType"
                type="radio"
                id="online"
                value="آنلاین"
                checked={paymentMethod === "آنلاین"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="online">آنلاین</label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">انتخاب درگاه پرداخت</h4>
            <div className="flex gap-2">
              <input
                name="paymentPortal"
                id="meli"
                type="radio"
                value="ملی"
                checked={paymentPortal === "ملی"}
                onChange={(e) => setPaymentPortal(e.target.value)}
              />
              <label htmlFor="meli">ملی</label>
            </div>
            <div className="flex gap-2">
              <input
                name="paymentPortal"
                id="pasargad"
                type="radio"
                value="پاسارگاد"
                checked={paymentPortal === "پاسارگاد"}
                onChange={(e) => setPaymentPortal(e.target.value)}
              />
              <label htmlFor="pasargad">پاسارگاد</label>
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/3">
            <div className="flex justify-between font-bold">
              <span>مبلغ قابل پرداخت:</span>
              <span>{totalPrice} تومان</span>
            </div>
            <Button
              onClick={() => handleFinalizePayment()}
              variant="secondary"
              size="sm"
            >
              پرداخت و ثبت نهایی
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Payment;
