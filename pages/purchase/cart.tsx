import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import PurchaseCart from "../../src/assets/icons/PurchaseCart";
import PurchaseDeliver from "../../src/assets/icons/PurchaseDeliver";
import PurchaseDone from "../../src/assets/icons/PurchaseDone";
import PurchaseLine from "../../src/assets/icons/PurchaseLine";
import PurchasePayment from "../../src/assets/icons/PurchasePayment";
import CartProduct from "../../src/components/custom/CartProduct";
import BasketIcon from "../../src/assets/icons/BasketIcon";
import Button from "../../src/components/custom/Button";
import { discountCalc } from "../../src/utils";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { addTotalCost } from "../../redux/reducers/totalCartPriceReducer";
const couponsURL = "http://localhost:3004/coupons";

const Cart: NextPage = () => {
  const [coupons, setCoupons] = useState<number | any>({
    bronze: "",
    silver: "",
    gold: "",
  });
  const [couponInput, setCouponInput] = useState("");
  const [totalWithCoupon, setTotalWithCoupon] = useState(0);
  const [hasCoupon, setHasCoupon] = useState(false);
  const cartProducts = useSelector(
    (state: RootState) => state.cartProductsReducer.cartProducts
  );

  const calcTotalPrice = () => {
    return cartProducts.reduce((a, b) => {
      if (b.hasDiscount) {
        return (
          a + discountCalc(true, b.discountAmount, b.basePrice) * b.quantity
        );
      } else {
        return a + b.basePrice * b.quantity;
      }
    }, 0);
  };

  const fetchCoupon = async () => {
    const response = await axios.get(couponsURL);
    setCoupons(response.data[0]);
  };

  useEffect(() => {
    fetchCoupon();
  }, []);

  const handleCouponSubmit = (e: FormEvent) => {
    e.preventDefault();
    switch (couponInput) {
      case "bronze":
        setTotalWithCoupon(calcTotalPrice() * (1 - coupons?.bronze / 100));
        setHasCoupon(true);
        break;
      case "silver":
        setTotalWithCoupon(calcTotalPrice() * (1 - coupons?.silver / 100));
        setHasCoupon(true);
        break;
      case "gold":
        setTotalWithCoupon(calcTotalPrice() * (1 - coupons?.gold / 100));
        setHasCoupon(true);
        break;

      default:
        toast("کد تخفیف صحیح نیست!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTotalWithCoupon(calcTotalPrice());
        break;
    }
  };

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmitReceit = () => {
    if (cartProducts.length > 0) {
      dispatch(addTotalCost(hasCoupon ? totalWithCoupon : calcTotalPrice()));
      router.push("http://localhost:3000/purchase/delivery");
    } else {
      console.log("error");
    }
  };

  return (
    <main className="container flex flex-col px-10 mx-auto w-full">
      <ToastContainer
        bodyClassName="toastify-class"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="mt-10 mb-20 flex items-center justify-center w-full gap-8 container">
        <div className="flex flex-col items-center">
          <PurchaseCart />
          <p className="absolute translate-y-20 font-bold mt-3 text-red-600">
            تایید سبد خرید
          </p>
        </div>
        <PurchaseLine />
        <div className="flex flex-col items-center">
          <PurchaseDeliver color="rgba(220,58,53,0.4)" />
          <p className="absolute translate-y-20 font-bold mt-3 text-[rgba(220,58,53,0.4)]">
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
      <section className="mb-10 flex gap-2 px-10">
        <div dir="ltr" className="cartContainer mx-5 h-[50vh] w-3/5">
          <div dir="rtl" className="flex flex-col gap-4 mb-8">
            {cartProducts.length > 0 ? (
              cartProducts.map((item) => (
                <CartProduct
                  handleTotalPrice={() => {
                    calcTotalPrice();
                  }}
                  id={item.id}
                  imgLink={item.imgLink}
                  productName={item.productName}
                  basePrice={item.basePrice}
                  hasDiscount={item.hasDiscount}
                  discountAmount={item.discountAmount}
                  quantity={item.quantity}
                />
              ))
            ) : (
              <div className="bg-white h-[50vh] rounded-lg shadow-lg flex flex-col gap-4 mx-5 justify-center items-center">
                <BasketIcon />
                <p>سبد خرید شما خالی است!</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col mx-5 self-start p-10 bg-white rounded-lg shadow-lg w-2/5 gap-8">
          <h3 className="text-2xl font-bold">خلاصه فاکتور</h3>
          <hr className="border-gray" />
          <div className="flex text-xl justify-between">
            <span>مجموع سبد خرید:</span>
            <span>{calcTotalPrice()} تومان</span>
          </div>
          <form
            onSubmit={(e) => handleCouponSubmit(e)}
            className="flex border border-red-600 h-16 rounded-md overflow-hidden"
          >
            <input
              className="placeholder:text-gray w-full px-3 shadow-inner"
              type="text"
              placeholder="کد تخفیف"
              onChange={(e) => setCouponInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 active:bg-red-500 text-white cursor-pointer px-6 text-lg font-bold"
            >
              تایید
            </button>
          </form>
          <div className="flex justify-between text-xl font-bold">
            <span>مجموع کل:</span>
            <span>{hasCoupon ? totalWithCoupon : calcTotalPrice()} تومان</span>
          </div>
          <Button onClick={() => handleSubmitReceit()} variant="secondary">
            پرداخت
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Cart;
