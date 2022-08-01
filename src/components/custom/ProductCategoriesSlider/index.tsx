import axios, { AxiosResponse } from "axios";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { add } from "../../../../redux/reducers/productCategoriesReducer";
import { RootState } from "../../../../redux/store";
import CategoryCard from "../CategoryCard";
import SwiperNext from "../../../assets/icons/SwiperNext";
import SwiperPrev from "../../../assets/icons/SwiperPrev";
import classNames from "classnames";
const URL = "http://localhost:3004/productCategories";

interface ProductCategory {
  id: number;
  value: string;
  description: string;
  img: string;
}

const ProductCategoriesSlider = () => {
  const [controlledSwiper, setControlledSwiper] = React.useState<any | null>(
    null
  );
  const dispatch = useDispatch();

  const handleGetCategories = async () => {
    const data: AxiosResponse = await axios.get<ProductCategory[]>(URL);
    dispatch(add(data.data));
  };

  // getting the products List
  const categoriesList: ProductCategory[] | undefined | any = useSelector(
    (state: RootState) => state.productCategories.Categories[0]
  );
  console.log(categoriesList);
  // let copiedProductsList: ProductCategory[] = [];
  // if (dataList !== undefined) {
  //   copiedProductsList = [...dataList];
  // }

  React.useEffect(() => {
    handleGetCategories();
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
          {categoriesList &&
            categoriesList.map((category: any) => {
              return (
                <SwiperSlide key={category.id}>
                  <CategoryCard
                    description={category.description}
                    value={category.value}
                    img={category.img}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCategoriesSlider;
