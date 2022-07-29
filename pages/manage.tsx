import type { NextPage } from "next";
import { FormEvent, useRef, useState } from "react";
import Button from "../src/components/custom/Button";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const URL = "http://localhost:3004/productsList";

const Manage: NextPage = () => {
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
      const response = await axios.post(URL, product);
      console.log(response.data);
    } catch (error) {
      console.log("error");
    }

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
  };
  return (
    <>
      <form
        onSubmit={handleAddProduct}
        className="flex flex-col gap-4 justify-center absolute right-1/2 top-1/2 translate-x-1/2 translate-y-[-50%] w-1/2"
      >
        <fieldset className="flex gap-4 border p-4 border-red-700 rounded">
          <legend>محصول</legend>
          <input
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            placeholder="نام محصول"
          />
          <input
            onChange={(e) => setPrice(+e.target.value)}
            type="number"
            placeholder="قیمت"
          />
          <select onChange={(e) => setCategory(e.target.value)}>
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
          <input
            onChange={(e) =>
              setFile(`./src/assets/imgs/products/${e.target.value}.jpg`)
            }
            type="text"
            placeholder="نام فایل تصویر"
          />
        </fieldset>
        <fieldset className="flex gap-4 border p-4 border-red-700 rounded">
          <legend>اطلاعات محاسباتی</legend>
          <input
            onChange={(e) => setDiscount(+e.target.value)}
            type="number"
            placeholder="میزان تخفیف"
          />
          <input
            onChange={(e) => setClicked(+e.target.value)}
            type="number"
            placeholder="تعداد  کلیک خورده"
          />
          <input
            onChange={(e) => setBought(+e.target.value)}
            type="number"
            placeholder="تعداد خریداری شده"
          />
        </fieldset>
        <fieldset className="flex gap-4 border p-4 border-red-700 rounded">
          <legend>جزئیات</legend>
          <input
            onChange={(e) => setMadeIn(e.target.value)}
            type="text"
            placeholder="کشور تولید کننده"
          />
          <input
            onChange={(e) => setTaste(e.target.value)}
            type="text"
            placeholder="طعم"
          />
          <input
            onChange={(e) => setEngName(e.target.value)}
            type="text"
            placeholder="نام محصول به انگلیسی"
          />
          <input
            onChange={(e) => setWeight(+e.target.value)}
            type="number"
            placeholder="وزن به گرم"
          />
        </fieldset>
        <Button type="submit" variant="primary">
          ثبت
        </Button>
      </form>
    </>
  );
};

export default Manage;
