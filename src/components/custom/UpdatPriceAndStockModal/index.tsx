import axios from "axios";
import classNames from "classnames";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsList } from "../../../../redux/reducers/productsListReducer";
import Button from "../Button";

interface ProductProps {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  hasDiscount: boolean;
  discount: number;
}

interface Props {
  setIsPriceAndStockModalOpen: Dispatch<SetStateAction<boolean>>;
  product: ProductProps | any;
}
const UpdatPriceAndStockModal = ({
  setIsPriceAndStockModalOpen,
  product,
}: Props) => {
  const [id, setId] = useState(product.id);
  const [quantity, setQuantity] = useState(product.quantity);
  const [hasDiscount, setHasDiscount] = useState(String(product.hasDiscount));
  const [discount, setDiscount] = useState(product.discount);
  const [price, setPrice] = useState(product.price);

  const inputClasses = classNames(
    "h-12 border border-gray px-3 rounded-lg w-full"
  );

  const dispatch = useDispatch();

  const handleUpdateSubmit = async (
    e: FormEvent,
    id: string,
    quantity: number,
    hasDiscount: string,
    discount: string,
    price: number
  ) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3004/productsList/${id}`, {
      quantity: +quantity,
      hasDiscount: discountHandler(hasDiscount),
      discount: +handleDiscountAmount(discount, hasDiscount),
      price: +price,
    });
    setIsPriceAndStockModalOpen(false);
    dispatch(fetchProductsList());
  };

  const discountHandler = (hasDiscount: string) => {
    if (hasDiscount === "true") {
      return true;
    } else {
      return false;
    }
  };

  const handleDiscountAmount = (discount: string, hasDiscount: string) => {
    if (hasDiscount === "false") {
      return 0;
    } else {
      return discount;
    }
  };

  console.log(hasDiscount);
  return (
    <form
      onSubmit={(e) =>
        handleUpdateSubmit(e, id, quantity, hasDiscount, discount, price)
      }
      className="bg-white flex flex-col gap-4 fixed z-50 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 p-10 rounded-xl"
    >
      <h2 className="text-lg font-bold text-center">
        غلات بار ماست و توت فرنگی و جو کورنی 25 گرمی
      </h2>
      <label htmlFor="basePrice">
        <p className="mb-2">قیمت پایه</p>
        <input
          className={inputClasses}
          id="basePrice"
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label htmlFor="stock">
        <p className="mb-2">موجودی</p>
        <input
          className={inputClasses}
          type="number"
          id="stock"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <div className="flex gap-4">
        <span>تخفیف:</span>
        <label className="flex items-center gap-2" htmlFor="hasDiscount">
          <input
            type="radio"
            name="discount"
            id="hasDiscount"
            value="true"
            checked={hasDiscount === "true"}
            onChange={(e) => setHasDiscount(e.target.value)}
          />
          <span>دارد</span>
        </label>
        <label className="flex items-center gap-2" htmlFor="noDiscount">
          <input
            type="radio"
            name="discount"
            id="noDiscount"
            value="false"
            checked={hasDiscount === "false"}
            onChange={(e) => setHasDiscount(e.target.value)}
          />
          <span>ندارد</span>
        </label>
      </div>
      <label htmlFor="discountAmount">
        <p className="mb-2">درصد تحفیف</p>
        <input
          disabled={hasDiscount === "false"}
          className={inputClasses}
          type="number"
          value={hasDiscount === "false" ? 0 : discount}
          id="discountAmount"
          onChange={(e) => setDiscount(e.target.value)}
        />
      </label>
      <Button type="submit" variant="primary">
        ثبت
      </Button>
    </form>
  );
};

export default UpdatPriceAndStockModal;
