import * as React from "react";
import Gift from "../../../assets/icons/Gift";
import Gaurantee from "../../../assets/icons/Guarantee";
import Support from "../../../assets/icons/Support";

const HomeMidSection = () => {
  return (
    <section className="bg-red-500 bg-opacity-50 rounded-[2rem] flex items-center justify-around p-10 mb-28">
      <div className="flex flex-col justify-center items-center">
        <Gift />
        <h5 className="text-2xl text-black font-bold mt-4">پردازش آنی</h5>
        <p className="mt-2 text-black text-opacity-75">
          پردازش آنی پس از پایان سفارش
        </p>
      </div>
      <svg
        width="2"
        height="206"
        viewBox="0 0 2 206"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1"
          y1="1"
          x2="0.999991"
          y2="205"
          stroke="#E77572"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 7"
        />
      </svg>
      <div className="flex flex-col justify-center items-center">
        <Support />
        <h5 className="text-2xl text-black font-bold mt-4">پشتیبانی</h5>
        <p className="mt-2 text-black text-opacity-75">پشتیبانی ۲۴ ساعته</p>
      </div>
      <svg
        width="2"
        height="206"
        viewBox="0 0 2 206"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1"
          y1="1"
          x2="0.999991"
          y2="205"
          stroke="#E77572"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 7"
        />
      </svg>
      <div className="flex flex-col justify-center items-center">
        <Gaurantee />
        <h5 className="text-2xl text-black font-bold mt-4">ضمانت بازگشت وجه</h5>
        <p className="mt-2 text-black text-opacity-75">
          ضمانت بازگشت وجه تا هفت روز
        </p>
      </div>
    </section>
  );
};

export default HomeMidSection;
