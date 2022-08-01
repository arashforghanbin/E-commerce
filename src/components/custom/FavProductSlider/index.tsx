import axios, { AxiosResponse } from "axios";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { add } from "../../../../redux/reducers/productsListReducer";
import { textTruncate, discountCalc } from "../../../utils";
import { RootState } from "../../../../redux/store";
import SmallCard from "../SmallCard/smallCard";
import SwiperNext from "../../../assets/icons/SwiperNext";
import SwiperPrev from "../../../assets/icons/SwiperPrev";
import classNames from "classnames";
const URL = "http://localhost:3004/productsList";

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

const FavProductSlider = () => {
  const [controlledSwiper, setControlledSwiper] = React.useState<any | null>(
    null
  );
  const dispatch = useDispatch();

  const handleGetData = async () => {
    const data: AxiosResponse = await axios.get<Product[]>(URL);
    dispatch(add(data.data));
  };

  // getting the products List
  const dataList: Product[] | undefined | any = useSelector(
    (state: RootState) => state.productsList.productsList[0]
  );
  let copiedProductsList: Product[] = [];
  if (dataList !== undefined) {
    copiedProductsList = [...dataList];
  }

  // sorting by favorite
  const sortedByFavorite = copiedProductsList?.sort(
    (a: Product, b: Product) => b.bought - a.bought
  );
  const tenMostFavorite = sortedByFavorite.slice(0, 10);

  React.useEffect(() => {
    handleGetData();
  }, []);

  const handlePrevSlide = () => {
    controlledSwiper.slidePrev();
  };
  const handleNextSlide = () => {
    controlledSwiper.slideNext();
  };

  const swiperButtonClasses = classNames(
    "bg-green-600 hover:bg-green-700 active:bg-green-500 flex justify-center items-center w-11 h-11 rounded-full"
  );

  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center">
        <div className="flex gap-2">
          <button
            className={swiperButtonClasses}
            onClick={() => handlePrevSlide()}
          >
            <SwiperPrev />
          </button>
          <button
            className={swiperButtonClasses}
            onClick={() => handleNextSlide()}
          >
            <SwiperNext />
          </button>
        </div>
        <h3 className="text-red-600 text-xl font-bold mx-auto">
          <span className="ml-1 text-yellow-300 favorite">محبوب ترین </span>
          محصولات
        </h3>
      </div>
      <div className="mb-28 bg-red-600 rounded-xl shadow-lg  shadow-red-400 p-4">
        <Swiper
          onSwiper={setControlledSwiper}
          slidesPerView={1.5}
          spaceBetween={0}
          className="mySwiper"
          modules={[Controller]}
          breakpoints={{
            1536: {
              slidesPerView: 5.2,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 4.2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1.9,
              spaceBetween: 0,
            },
          }}
        >
          {tenMostFavorite &&
            tenMostFavorite.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <SmallCard
                    productName={textTruncate(product.productName, 21)}
                    imgLink={product.file}
                    imgAlt={product.engName}
                    initialPrice={product.price}
                    hasDiscount={product.hasDiscount}
                    discountAmount={product.discount}
                    discountPrice={discountCalc(
                      true,
                      product.discount,
                      product.price
                    )}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default FavProductSlider;
