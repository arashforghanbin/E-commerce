import axios from "axios";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { add } from "../../../../redux/reducers/productsListReducer";
import { RootState } from "../../../../redux/store";
import SmallCard from "../SmallCard/smallCard";
import SwiperButton from "../SwiperButton";
const URL = "http://localhost:3004/productsList";

interface Product {
  id: string;
  productName: string;
  price: number;
  category: string;
  file: string;
  discount: number;
  clicked: number;
  bought: number;
  taste: string;
  engName: string;
  weight: number;
}

const FavProductSlider = () => {
  const [controlledSwiper, setControlledSwiper] = React.useState<any | null>(
    null
  );
  const dispatch = useDispatch();

  const handleGetData = async () => {
    const { data } = await axios.get(URL);
    dispatch(add(data));
  };

  // getting the products List
  const dataList = useSelector(
    (state: RootState) => state.productsList.productsList[0]
  );
  console.log(dataList);
  const copiedProductsList: {} = { ...dataList };
  console.log(copiedProductsList);

  // sorting by favorite
  // const sortedByFavorite = CopiedProductsList.sort(
  //   (a: Product, b: Product) => b.bought - a.bought
  // );

  React.useEffect(() => {
    handleGetData();
  }, []);

  const handlePrevSlide = () => {
    controlledSwiper.slidePrev();
  };
  const handleNextSlide = () => {
    controlledSwiper.slideNext();
  };

  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center">
        <div className="flex gap-2">
          <SwiperButton variant="prev" onClick={() => handlePrevSlide()} />
          <SwiperButton variant="next" onClick={() => handleNextSlide()}>
            بعدی
          </SwiperButton>
        </div>
        <h3 className="text-red-600 text-xl font-bold mx-auto">
          <span className="ml-1 text-yellow-300 favorite">محبوب ترین </span>
          محصولات
        </h3>
      </div>
      <div className="mb-28 bg-red-600 rounded-xl shadow-lg  shadow-red-400 p-4">
        <Swiper
          onSwiper={setControlledSwiper}
          slidesPerView={5.5}
          spaceBetween={0}
          className="mySwiper"
          modules={[Controller]}
        >
          <SwiperSlide>
            <SmallCard
              productName="اسمارتیز خوشمزه"
              imgLink="https://abnabat-choobi.com/api/ui/image/watermark?path=/uploads/product/r65_3.jpg&etype=product"
              imgAlt="NESTELE COFFEE MATE CHOCOLATE CREAM FREE GUTEN"
              initialPrice={10000}
              hasDiscount
              discountAmount={20}
              discountPrice={1000}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FavProductSlider;
