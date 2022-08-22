import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from "../../redux/reducers/productsListReducer";
import { RootState } from "../../redux/store";
import Star from "../../src/assets/icons/Star";
import Button from "../../src/components/custom/Button";
import { RoundBtn } from "../../src/components/custom/RoundBtn";
import SimilarProducts from "../../src/components/custom/SimilarProducts";
import { discountCalc, underLineToSpace } from "../../src/utils";

interface Product {
  bought: number;
  category: string;
  clicked: number;
  discount: number;
  engName: string;
  file: string;
  id: string;
  madeIn: string;
  price: number;
  productName: string;
  taste: string;
  weight: number;
  hasDiscount: boolean;
}

const SingleProduct = () => {
  const [chosenProduct, setChosenProduct] = useState<Product>();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  const productsList = useSelector(
    (state: RootState) => state.productsList.productsList
  );
  let copiedProductsList: Product[] = [];
  if (productsList !== undefined) {
    copiedProductsList = [...productsList];
  }

  const router = useRouter();
  useEffect(() => {
    const productName = underLineToSpace(router.query.id);
    const [selectedProduct] = copiedProductsList.filter(
      (item) => item.productName === productName
    );
    setChosenProduct(selectedProduct);
  });

  return (
    <>
      <main className="container mx-auto flex">
        {chosenProduct && (
          <div className="py-12 px-10 flex items-center justify-around gap-6">
            <div className="rounded-xl relative overflow-hidden shadow-md">
              {chosenProduct.hasDiscount && (
                <div className="absolute text-white font-bold py-2 px-3 left-0 rounded-br-xl text-lg z-10 bg-green-600">
                  {chosenProduct.discount}%
                </div>
              )}
              <Image width={400} height={420} src={chosenProduct.file} />
            </div>
            <div className="flex flex-col items-start gap-6">
              <h2 className="text-2xl font-bold">
                {chosenProduct.productName}
              </h2>
              <div className="flex gap-2">
                <p className="text-xl text-gray">4.5 </p>
                <span>
                  <Star />
                </span>
              </div>
              <p className={`${chosenProduct.hasDiscount ? "text-xl line-through": "text-2xl"} text-gray`}>
                قیمت: {chosenProduct.price} تومان
              </p>
              {chosenProduct.hasDiscount && (
                <p className="text-2xl text-gray">
                  قیمت با تخفیف:{" "}
                  {discountCalc(
                    true,
                    chosenProduct.discount,
                    chosenProduct.price
                  )}{" "}
                  تومان
                </p>
              )}
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
            <section className="w-2/5 h-full self-stretch bg-white flex flex-col justify-between rounded-xl shadow-md p-4">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">
                  توضیحات محصول
                </h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">مشخصات</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <p className="w-1/2">ساخت کشور: {chosenProduct.madeIn}</p>
                    <p className="w-1/2">
                      نام به انگلیسی: {chosenProduct.engName}
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-1/2">وزن: {chosenProduct.weight} گرم</p>
                    <p className="w-1/2">طعم: {chosenProduct.taste}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
      <aside className="container px-10 mx-auto  ">
        <SimilarProducts />
      </aside>
    </>
  );
};

export default SingleProduct;
