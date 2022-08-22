import axios from "axios";
import React, { useEffect, useState } from "react";
import EditIcon from "../../../assets/icons/EditIcon";
import { toHijric } from "../../../utils";
import { RoundBtn } from "../RoundBtn";
import UpdateOrderModal from "../UpdateOrderModal";

const OrderManagement = () => {
  const [isUpdateOrderModalOpen, setIsUpdateOrderModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>();
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  const fetchPurchasedProducts = async () => {
    const response = await axios.get("http://localhost:3004/purchasedProducts");
    setPurchasedProducts(response.data);
  };

  useEffect(() => {
    fetchPurchasedProducts();
  }, [isUpdateOrderModalOpen]);

  const handleModifyOrder = (order: any) => {
    setIsUpdateOrderModalOpen(true);
    setSelectedOrder(order);
  };

  return (
    <>
      <section className="bg-white w-[70%] mx-auto my-10  shadow-lg rounded-xl">
        <ul className="flex shadow-md">
          <li className="pr-4 w-[20%] py-6 font-bold">نام کاربر</li>
          <li className="pr-4 w-[20%] py-6 font-bold">نام گیرنده</li>
          <li className="pr-4 w-[20%] py-6 flex justify-center font-bold">
            مبلغ خرید
          </li>
          <li className="pr-4 w-[15%] py-6 flex justify-center font-bold">
            تاریخ خرید
          </li>
          <li className="pr-4 w-[25%] py-6 flex justify-center font-bold">
            وضعیت سفارش
          </li>
        </ul>
        <div className="managerProductList  max-h-96">
          {purchasedProducts &&
            purchasedProducts.map((item: any) => (
              <ul key={item.id} className="flex items-center">
                <li className="pr-4 w-[20%]  py-4">{item.userName}</li>
                <li className="pr-4 w-[20%]  py-4">{item.recipient}</li>
                <li className="pr-4 w-[20%] flex justify-center py-4">
                  {item.totalPrice}
                </li>
                <li className="pr-4 w-[15%] flex justify-center py-4">
                  {toHijric(item.orderDate)}
                </li>
                <li className="pr-4 w-[25%] flex justify-center items-center gap-2 py-4">
                  <span>{item.status}</span>
                  <RoundBtn onClick={() => handleModifyOrder(item)}>
                    <EditIcon />
                  </RoundBtn>
                </li>
              </ul>
            ))}
        </div>
      </section>

      {isUpdateOrderModalOpen && (
        <>
          <UpdateOrderModal
            setIsUpdateOrderModalOpen={setIsUpdateOrderModalOpen}
            order={selectedOrder}
          />
          <div
            onClick={() => setIsUpdateOrderModalOpen(false)}
            className="overlay h-full w-full z-40 fixed top-0 right-0"
          ></div>
        </>
      )}
    </>
  );
};

export default OrderManagement;
