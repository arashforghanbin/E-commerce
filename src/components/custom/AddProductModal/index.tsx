import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import Button from "../Button";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { fetchProductsList } from "../../../../redux/reducers/productsListReducer";
const URL = "http://localhost:3004/productsList";

interface Props {
  setIsAddProductModalOpen: Dispatch<SetStateAction<boolean>>;
}

const AddProductModal = ({ setIsAddProductModalOpen }: Props) => {
  const [id, setId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("toffeeAndChocolate");
  const [file, setFile] = useState("");
  const [discount, setDiscount] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [bought, setBought] = useState(0);
  const [madeIn, setMadeIn] = useState("");
  const [taste, setTaste] = useState("");
  const [engName, setEngName] = useState("");
  const [weight, setWeight] = useState<number | null>(0);

  const dispatch = useDispatch();
  const handleAddProduct = async (e: FormEvent) => {
    e.preventDefault();
    setId(uuidv4());
    const product = {
      id,
      productName,
      price,
      category,
      file,
      discount,
      clicked,
      bought,
      madeIn,
      taste,
      engName,
      weight,
    };
    try {
      await axios.post(URL, product);
    } catch (error) {
      console.log("error");
    }
    dispatch(fetchProductsList());
    setProductName("");
    setPrice(0);
    setCategory("toffeeAndChocolate");
    setFile("");
    setDiscount(0);
    setClicked(0);
    setBought(0);
    setMadeIn("");
    setTaste("");
    setEngName("");
    setWeight(0);
    setIsAddProductModalOpen(false);
  };

  const inputClasses = classNames("h-12 border border-gray px-3 rounded-lg");
  return (
    <section className="fixed z-50 bg-white p-10 rounded-xl right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2">
      <form
        onSubmit={handleAddProduct}
        className="flex flex-col gap-4 justify-center  right-1/2 top-1/2 "
      >
        <fieldset className="flex flex-col item gap-4 border p-4 border-red-700 rounded">
          <legend>محصول</legend>
          <input
            className={inputClasses}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            placeholder="نام محصول"
          />
          <div className="flex justify-between gap-4">
            <input
              className={inputClasses}
              onChange={(e) => setPrice(+e.target.value)}
              type="number"
              placeholder="قیمت"
            />

            <select
              className={inputClasses}
              onChange={(e) => setCategory(e.target.value)}
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
            className={inputClasses}
            onChange={(e) => setFile(e.target.value)}
            type="text"
            placeholder="لینک تصویر محصول"
          />
        </fieldset>
        <fieldset className="flex flex-col gap-4 border p-4 border-red-700 rounded">
          <legend>جزئیات</legend>
          <div className="flex gap-4">
            <input
              className={inputClasses}
              onChange={(e) => setMadeIn(e.target.value)}
              type="text"
              placeholder="کشور تولید کننده"
            />
            <input
              className={inputClasses}
              onChange={(e) => setTaste(e.target.value)}
              type="text"
              placeholder="طعم"
            />
          </div>
          <div className="flex gap-4">
            <input
              className={inputClasses}
              onChange={(e) => setEngName(e.target.value)}
              type="text"
              placeholder="نام محصول به انگلیسی"
            />
            <input
              className={inputClasses}
              onChange={(e) => setWeight(+e.target.value)}
              type="number"
              placeholder="وزن به گرم"
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

export default AddProductModal;
