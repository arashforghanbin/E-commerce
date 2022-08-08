import { NextPage } from "next";
import Image from "next/image";
import Star from "../src/assets/icons/Star";
import Button from "../src/components/custom/Button";
import { RoundBtn } from "../src/components/custom/RoundBtn";
import SimilarProducts from "../src/components/custom/SimilarProducts";

const Single: NextPage = () => {
  return (
    <>
      <main className="container mx-auto">
        <div className="py-12 px-10 flex items-center justify-around gap-6">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              width={400}
              height={420}
              src="https://abnabat-choobi.com/api/ui/image/watermark?path=/uploads/product/142_3.jpg&etype=product"
            />
          </div>
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-2xl font-bold">
              {" "}
              که خیلی خیلی ناسه با همگی مسلاسه نام محصول مورد نظر
            </h2>
            <div className="flex gap-2">
              <p className="text-xl text-gray">4.5 </p>
              <span>
                <Star />
              </span>
            </div>
            <p className="text-2xl text-gray">قیمت: 1000 تومان</p>
            <div className="flex gap-4 items-center">
              <span className="text-2xl">تعداد</span>
              <div className="flex items-center gap-4">
                <RoundBtn>
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
                <span className="font-bold text-xl">0</span>
                <RoundBtn>
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
            <Button variant="primary">افزودن به سبد</Button>
          </div>
          <section className="w-1/2 bg-white flex flex-col gap-4 rounded-xl shadow-md p-4">
            <h3 className="text-2xl font-bold text-red-600">توضیحات محصول</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده
            </p>
            <h3 className="text-2xl font-bold text-red-600">مشخصات</h3>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <p className="w-1/2">ساخت کشور: آلمان</p>
                <p className="w-1/2">
                  نام به انگلیسی: shift bekesh engineering
                </p>
              </div>
              <div className="flex">
                <p className="w-1/2">وزن: 150 گرم</p>
                <p className="w-1/2">طعم: ترش متمایل به تلخ</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <aside className="container px-10 mx-auto  ">
        <SimilarProducts />
      </aside>
    </>
  );
};

export default Single;
