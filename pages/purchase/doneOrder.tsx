import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import PurchaseCart from "../../src/assets/icons/PurchaseCart";
import PurchaseDeliver from "../../src/assets/icons/PurchaseDeliver";
import PurchaseDone from "../../src/assets/icons/PurchaseDone";
import PurchaseLine from "../../src/assets/icons/PurchaseLine";
import PurchasePayment from "../../src/assets/icons/PurchasePayment";
import Button from "../../src/components/custom/Button";

const doneOrder: NextPage = () => {
  const router = useRouter();

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
          <PurchasePayment color="#73737399" />
          <p className="absolute translate-y-20 font-bold mt-3 text-[#73737399]">
            انتخاب شیوه پرداخت
          </p>
        </div>
        <PurchaseLine color="#73737399" />
        <div className="flex flex-col items-center">
          <PurchaseDone />
          <p className="absolute translate-y-20 font-bold mt-3 text-red-600">
            اتمام سفارش
          </p>
        </div>
      </div>
      <section className="flex flex-col gap-8 items-center bg-white rounded-[2rem] shadow-xl p-10 mb-14">
        <PurchaseDone color="#89BE5A" />
        <h2 className="text-2xl font-bold">پرداخت شما با موفقیت انجام شد.</h2>
        <p>با تشکر از خرید شما</p>
        <Button
          onClick={() => router.push("http://localhost:3000/")}
          variant="primary"
        >
          بازگشت به خانه
        </Button>
      </section>
    </main>
  );
};

export default doneOrder;
