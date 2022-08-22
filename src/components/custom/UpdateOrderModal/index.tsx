import axios from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { toHijric } from "../../../utils";
import Button from "../Button";

interface Props {
  setIsUpdateOrderModalOpen: Dispatch<SetStateAction<boolean>>;
  order: any;
}
const UpdateOrderModal = ({ order, setIsUpdateOrderModalOpen }: Props) => {
  const [orderStatus, setOrderStatus] = useState(order.status);
  const dispatch = useDispatch();

  const handleChangeStatus = async () => {
    setOrderStatus("ارسال شد");
    await axios.patch(`http://localhost:3004/purchasedProducts/${order.id}`, {
      status: "ارسال شد",
    });
    setIsUpdateOrderModalOpen(false);
  };

  return (
    <section className="bg-white fixed bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 z-50 p-10 rounded-xl shadow-lg flex flex-col gap-4">
      <div className="flex gap-8 justify-between">
        <p>نام کاربر: {order.userName}</p>
        <p>نام گیرنده: {order.recipient}</p>
      </div>
      <div className="flex gap-8 justify-between">
        <p>نوع پرداخت: {order.paymentMethod}</p>
        <p>درگاه پرداخت: {order.paymentPortal}</p>
      </div>

      <p>تاریخ سفارش: {toHijric(order.orderDate)}</p>
      <p>وضعیت سفارش: {order.status}</p>
      <p className="font-bold">مبلغ خریداری شده: {order.totalPrice} تومان</p>
      <div className="bg-yellow-300 rounded-lg shadow-md overflow-hidden my-4">
        <ul className="flex gap-12 bg-red-600 p-4 text-yellow-300">
          <li className="font-bold w-[60%]">نام محصول</li>
          <li className="font-bold w-[40%] flex justify-center">تعداد</li>
        </ul>
        <div className="orderModalContainer max-h-[8rem] flex flex-col gap-4">
          {order.purchasedProducts.map((item: any) => (
            <ul className="flex gap-12 p-4">
              <li className="w-[62%]">{item.productName}</li>
              <li className="w-[25%] flex justify-center">{item.quantity}</li>
            </ul>
          ))}
        </div>
      </div>
      {order.status === "در حال پردازش" ? (
        <Button onClick={() => handleChangeStatus()} variant="primary">
          ارسال شد
        </Button>
      ) : (
        ""
      )}
    </section>
  );
};

export default UpdateOrderModal;
