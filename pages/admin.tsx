import { NextPage } from "next";
import { useState } from "react";
import AdminIcon from "../src/assets/icons/AdminIcon";
import Button from "../src/components/custom/Button";
import OrderManagement from "../src/components/custom/OrderManagement";
import ProductManagement from "../src/components/custom/ProductManagement";
import StockManagement from "../src/components/custom/StockManagement";



const Admin: NextPage = () => {
  const [adminTabSelected, setAdminTabSelected] = useState("productManagement");

  return (
    <div className="relative">
      <div className="container px-10 mx-auto">
        <aside className="flex gap-12 shadow-lg rounded-xl bg-white px-10 my-10">
          <AdminIcon />
          <h2 className="font-bold py-5">پنل مدیریت:</h2>
          <ul className="flex gap-8">
            <li
              onClick={() => setAdminTabSelected("productManagement")}
              className={`${
                adminTabSelected === "productManagement" ? "border-b-4" : ""
              } px-4 border-red-600 py-5 cursor-pointer`}
            >
              مدیریت محصولات
            </li>
            <li
              onClick={() => setAdminTabSelected("stockManagement")}
              className={`${
                adminTabSelected === "stockManagement" ? "border-b-4" : ""
              } px-4 border-red-600 py-5 cursor-pointer`}
            >
              مدیریت موجودی و قیمت
            </li>
            <li
              onClick={() => setAdminTabSelected("orderManagement")}
              className={`${
                adminTabSelected === "orderManagement" ? "border-b-4" : ""
              } px-4 border-red-600 py-5 cursor-pointer`}
            >
              مدیریت سفارشات
            </li>
          </ul>
        </aside>
        <main>
          {adminTabSelected === "productManagement" ? (
            <ProductManagement />
          ) : adminTabSelected === "stockManagement" ? (
            <StockManagement />
          ) : (
            <OrderManagement />
          )}
        </main>
      </div>
    
    </div>
  );
};

export default Admin;
