import Button from "../Button";
import classNames from "classnames";
import Image from "next/image";

interface Props {
  productName: string;
  price: number;
  category: string;
  imgLink: string;
  madeIn: string;
  engName: string;
  weight: number | any;
  taste: string;
}

const ViewProductModal = ({
  productName,
  price,
  category,
  imgLink,
  madeIn,
  engName,
  weight,
  taste,
}: Props) => {
  const inputClasses = classNames("h-12 border border-gray px-3 rounded-lg");
  return (
    <section className="fixed flex items-center gap-8 z-50 bg-white p-10 rounded-xl right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2">
      <div className="shadow-lg rounded-lg">
        <Image src={imgLink} height={300} width={300} />
      </div>
      <div className="flex flex-col gap-4 justify-center  right-1/2 top-1/2 ">
        <fieldset className="flex flex-col item gap-4 border p-4 border-red-700 rounded">
          <legend>محصول</legend>
          <input
            readOnly
            value={productName}
            className={inputClasses}
            type="text"
            placeholder="نام محصول"
          />
          <div className="flex justify-between gap-4">
            <input
              readOnly
              value={price}
              className={inputClasses}
              type="number"
              placeholder="قیمت"
            />

            <select aria-readonly value={category} className={inputClasses}>
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
            readOnly
            value={imgLink}
            className={inputClasses}
            type="text"
            placeholder="لینک تصویر محصول"
          />
        </fieldset>
        <fieldset className="flex flex-col gap-4 border p-4 border-red-700 rounded">
          <legend>جزئیات</legend>
          <div className="flex gap-4">
            <input
              readOnly
              value={madeIn}
              className={inputClasses}
              type="text"
              placeholder="کشور تولید کننده"
            />
            <input
              readOnly
              value={taste}
              className={inputClasses}
              type="text"
              placeholder="طعم"
            />
          </div>
          <div className="flex gap-4">
            <input
              readOnly
              value={engName}
              className={inputClasses}
              type="text"
              placeholder="نام محصول به انگلیسی"
            />
            <input
              readOnly
              value={weight}
              className={inputClasses}
              type="number"
              placeholder="وزن به گرم"
            />
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default ViewProductModal;
