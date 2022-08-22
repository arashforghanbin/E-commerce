import Button from "../Button";
import classNames from "classnames";
import axios from "axios";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsList } from "../../../../redux/reducers/productsListReducer";

interface Props {
  id: string;
  productName: string;
  price: number;
  category: string;
  imgLink: string;
  madeIn: string;
  engName: string;
  weight: number | any;
  taste: string;
  setIsUpdateProductModalOpen: Dispatch<SetStateAction<boolean>>;
}

const UpdateProductModal = ({
  id,
  productName,
  price,
  category,
  imgLink,
  madeIn,
  engName,
  weight,
  taste,
  setIsUpdateProductModalOpen,
}: Props) => {
  const [editedProductName, setEditedProductName] = useState(productName);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedCategory, setEditedCategory] = useState(category);
  const [editedImgLink, setEditedImgLink] = useState(imgLink);
  const [editedMadeIn, setEditedMadeIn] = useState(madeIn);
  const [editedEngName, setEditedEngName] = useState(engName);
  const [editedWeight, setEditedWeight] = useState(weight);
  const [editedTaste, setEditedTaste] = useState(taste);
  
  const inputClasses = classNames("h-12 border border-gray px-3 rounded-lg");

  const dispatch = useDispatch();

  const handleUpdateSubmit = async (
    e: FormEvent,
    id: string,
    editedProductName: string,
    editedPrice: number,
    editedCategory: string,
    editedImgLink: string,
    editedMadeIn: string,
    editedEngName: string,
    editedWeight: number,
    editedTaste: string
  ) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3004/productsList/${id}`, {
      productName: editedProductName,
      price: editedPrice,
      category: editedCategory,
      imgLink: editedImgLink,
      madeIn: editedMadeIn,
      engName: editedEngName,
      weight: editedWeight,
      taste: editedTaste,
    });
    setIsUpdateProductModalOpen(false);
    dispatch(fetchProductsList());
  };

  return (
    <section className="fixed z-50 bg-white p-10 rounded-xl right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2">
      <form
        onSubmit={(e) =>
          handleUpdateSubmit(
            e,
            id,
            editedProductName,
            editedPrice,
            editedCategory,
            editedImgLink,
            editedMadeIn,
            editedEngName,
            editedWeight,
            editedTaste
          )
        }
        className="flex flex-col gap-4 justify-center  right-1/2 top-1/2 "
      >
        <fieldset className="flex flex-col item gap-4 border p-4 border-red-700 rounded">
          <legend>محصول</legend>
          <input
            value={editedProductName}
            className={inputClasses}
            type="text"
            placeholder="نام محصول"
            onChange={(e) => setEditedProductName(e.target.value)}
          />
          <div className="flex justify-between gap-4">
            <input
              value={editedPrice}
              className={inputClasses}
              type="number"
              placeholder="قیمت"
              onChange={(e) => setEditedPrice(+e.target.value)}
            />

            <select
              onChange={(e) => setEditedCategory(e.target.value)}
              value={editedCategory}
              className={inputClasses}
            >
              <option value="toffeeAndChocolate">شکلات و تافی</option>
              <option value="chipsAndCrackers">چیپس و شور و کراکر</option>
              <option value="cereal">کورنفلکس و غلات</option>
              <option value="jillyBeans">دراژه و جیلی بینز</option>
              <option value="cakesAndCookies">بیسکویت و ویفر و کیک</option>
              <option value="chocolate">شکلات و کره صبحانه</option>
              <option value="gum">آدامس و خوشبوکننده</option>
              <option value="marshmellowAndJelly">پاستیل و مارشمالو</option>
              <option value="lollipop">آبنبات و آبنبات چوبی</option>
              <option value="drinks">نوشیدنی سرد و گرم</option>
            </select>
          </div>

          <input
            value={editedImgLink}
            className={inputClasses}
            type="text"
            placeholder="لینک تصویر محصول"
            onChange={(e) => setEditedImgLink(e.target.value)}
          />
        </fieldset>
        <fieldset className="flex flex-col gap-4 border p-4 border-red-700 rounded">
          <legend>جزئیات</legend>
          <div className="flex gap-4">
            <input
              value={editedMadeIn}
              className={inputClasses}
              type="text"
              placeholder="کشور تولید کننده"
              onChange={(e) => setEditedMadeIn(e.target.value)}
            />
            <input
              value={editedTaste}
              className={inputClasses}
              type="text"
              placeholder="طعم"
              onChange={(e) => setEditedTaste(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <input
              value={editedEngName}
              className={inputClasses}
              type="text"
              placeholder="نام محصول به انگلیسی"
              onChange={(e) => setEditedEngName(e.target.value)}
            />
            <input
              value={editedWeight}
              className={inputClasses}
              type="number"
              placeholder="وزن به گرم"
              onChange={(e) => setEditedWeight(e.target.value)}
            />
          </div>
        </fieldset>
        <Button type="submit" variant="primary">
          ثبت
        </Button>
      </form>
    </section>
  );
};

export default UpdateProductModal;
