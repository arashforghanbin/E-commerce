import { NextPage } from "next";
import React from "react";
import PurchaseCart from "../../src/assets/icons/PurchaseCart";
import PurchaseDeliver from "../../src/assets/icons/PurchaseDeliver";
import PurchaseDone from "../../src/assets/icons/PurchaseDone";
import PurchaseLine from "../../src/assets/icons/PurchaseLine";
import PurchasePayment from "../../src/assets/icons/PurchasePayment";
import Button from "../../src/components/custom/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useRouter } from "next/router";
import { setIsModalOpen } from "../../redux/reducers/modalReducer";
import { addUserInfo } from "../../redux/reducers/userInfoReducer";

const delivery: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const isUserLoggedIn: boolean = useSelector(
    (state: RootState) => state.userLoginReducer.isLoggedIn
  );

  const validatePersonalInfo = Yup.object({
    province: Yup.string()
      .min(2, "نام استان حداقل ۲ کاراکتر دارد")
      .required("لطفا نام استان را وارد کنید"),
    city: Yup.string()
      .min(2, "نام استان حداقل ۲ کاراکتر دارد")
      .required("لطفا نام شهر را وارد کنید"),
    recipient: Yup.string()
      .min(3, "نام گیرنده باید حداقل ۳ کاراکتر باشد")
      .required("لطفا نام گیرنده را وارد کنید"),
    personalId: Yup.string()
      .length(10, "کد ملی باید ۱۰ رقم باشد")
      .required("لطفا کد ملی را وارد کنید"),
    zipCode: Yup.string()
      .length(10, "کد پستی باید ۱۰ رقم باشد")
      .required("لطفا کد پستی را وارد کنید"),
    address: Yup.string()
      .min(10, "آدرس خود را دقیق تر وارد کنید")
      .max(100, "آدرس خود را مختصرتر وارد کنید")
      .required("لطفا آدرس خود را وارد کنید"),
  });

  const formik = useFormik({
    initialValues: {
      province: "",
      city: "",
      recipient: "",
      personalId: "",
      zipCode: "",
      address: "",
    },
    validationSchema: validatePersonalInfo,
    onSubmit: async (values) => {
      if (isUserLoggedIn) {
        dispatch(
          addUserInfo({
            province: values.province,
            city: values.city,
            recipient: values.recipient,
            personalId: values.personalId,
            zipCode: values.zipCode,
            address: values.address,
          })
        );
        router.push("http://localhost:3000/purchase/payment");
      } else {
        dispatch(setIsModalOpen(true));
      }
    },
  });

  const userInfo = useSelector(
    (state: RootState) => state.userInfoReducer.userInfo
  );

 

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
          <PurchaseDeliver />
          <p className="absolute translate-y-20 font-bold mt-3 text-red-600">
            انتخاب آدرس
          </p>
        </div>
        <PurchaseLine />
        <div className="flex flex-col items-center">
          <PurchasePayment color="rgba(220,58,53,0.4)" />
          <p className="absolute translate-y-20 font-bold mt-3 text-[rgba(220,58,53,0.4)]">
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
      <section className="w-full bg-white rounded-xl shadow-xl my-14 p-10">
        <h1 className="text-red-600 text-2xl mb-8 font-bold">نشانی</h1>
        <form onSubmit={formik.handleSubmit} className="flex justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <div>
                <input
                  className=" border border-gray h-12 px-3 rounded-lg"
                  placeholder="استان"
                  name="province"
                  type="text"
                  value={formik.values.province}
                  onChange={formik.handleChange}
                />
                {formik.errors.province && formik.touched.province ? (
                  <p className="text-red-600 translate-x-[-1rem] translate-y- text-sm">
                    {formik.errors.province}
                  </p>
                ) : null}
              </div>
              <div>
                <input
                  className="border border-gray h-12 px-3 rounded-lg"
                  placeholder="شهر"
                  name="city"
                  type="text"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                />
                {formik.errors.city && formik.touched.city ? (
                  <p className="text-red-600 translate-x-[-1rem] text-sm">
                    {formik.errors.city}
                  </p>
                ) : null}
              </div>
            </div>
            <div>
              <input
                className="w-full border border-gray h-12 px-3 rounded-lg"
                placeholder="نام تحویل گیرنده"
                name="recipient"
                type="text"
                value={formik.values.recipient}
                onChange={formik.handleChange}
              />
              {formik.errors.recipient && formik.touched.recipient ? (
                <p className="text-red-600 translate-x-[-1rem] text-sm">
                  {formik.errors.recipient}
                </p>
              ) : null}
            </div>
            <div>
              <input
                className="w-full border border-gray h-12 px-3 rounded-lg"
                placeholder="کد ملی"
                name="personalId"
                type="text"
                value={formik.values.personalId}
                onChange={formik.handleChange}
              />
              {formik.errors.personalId && formik.touched.personalId ? (
                <p className="text-red-600 translate-x-[-1rem] text-sm">
                  {formik.errors.personalId}
                </p>
              ) : null}
            </div>
            <div>
              <input
                className="w-full border border-gray h-12 px-3 rounded-lg"
                placeholder="کد پستی"
                name="zipCode"
                type="text"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
              />
              {formik.errors.zipCode && formik.touched.zipCode ? (
                <p className="text-red-600 translate-x-[-1rem] text-sm">
                  {formik.errors.zipCode}
                </p>
              ) : null}
            </div>
          </div>
          <div className="p-3 flex flex-col justify-between w-1/3 border bg-[#fff] border-gray rounded-lg">
            <p className="text-gray">آدرس دقیق</p>
            <div>
              <iframe
                src="https://balad.ir/embed?p=1sw77kwfpxVWag"
                title="مشاهده کندی شاپ روی نقشه بلد"
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <textarea
                className="resize-none border border-gray rounded-lg p-3"
                placeholder="آدرس پستی"
                name="address"
                id="address"
                cols={40}
                rows={6}
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              {formik.errors.address && formik.touched.address ? (
                <p className="text-red-600  text-sm">{formik.errors.address}</p>
              ) : null}
            </div>
            <Button type="submit" variant="secondary">
              ادامه فرآیند خرید
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default delivery;
