import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedCategories } from "../../../../redux/reducers/filterReducer";
import { fetchCategories } from "../../../../redux/reducers/productCategoriesReducer";
import { RootState } from "../../../../redux/store";
import ArrowDown from "../../../assets/icons/ArrowDown";

const Filterinng = () => {
  const [categoriesClicked, setCategoriesClicked] = useState(false);
  const [priceClicked, setPriceClicked] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);

  const dispatch = useDispatch();

  const handleChecked = (value: string) => {
    const currentIndex = checked.indexOf(value);
    const newlyChecked = [...checked];

    if (currentIndex === -1) {
      newlyChecked.push(value);
    } else {
      newlyChecked.splice(currentIndex, 1);
    }
    setChecked(newlyChecked);
    
  };

  useEffect(()=> {
    dispatch(selectedCategories(checked));
  },[checked])

  const toggleCategoriesDropDown = () => {
    if (categoriesClicked === true) {
      return setCategoriesClicked(false);
    } else {
      return setCategoriesClicked(true);
    }
  };

  const togglePriceDropDown = () => {
    if (priceClicked === true) {
      return setPriceClicked(false);
    } else {
      return setPriceClicked(true);
    }
  };

  interface ProductCategory {
    id: number;
    value: string;
    description: string;
    img: string;
  }

  const categoriesList: ProductCategory[] | undefined | any = useSelector(
    (state: RootState) => state.productCategories.Categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <section className=" w-1/5">
      <div className="bg-white px-5 py-8 rounded-[2rem] shadow-md flex flex-col gap-8">
        <div className="flex justify-between">
          <p className="text-black ">فیلترها</p>
          <p className="text-black hover:text-red-600 cursor-pointer">
            حذف همه فیلترها
          </p>
        </div>
        <div>
          <div
            onClick={() => toggleCategoriesDropDown()}
            className="flex justify-between items-center cursor-pointer py-4"
          >
            <h6 className="text-black font-bold">دسته بندی</h6>
            {categoriesClicked ? <ArrowDown /> : <ArrowDown reverse />}
          </div>
          <div className="flex flex-col gap-2">
            {categoriesClicked === true
              ? categoriesList &&
                categoriesList.map((category: any, index: number) => {
                  return (
                    <div key={index} className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name={category.value}
                        id={category.id}
                        value={category.value}
                        onChange={() => handleChecked(category.value)}
                      />
                      <label htmlFor={category.id}>
                        {category.description}
                      </label>
                    </div>
                  );
                })
              : ""}
          </div>
          <div
            onClick={() => togglePriceDropDown()}
            className="flex justify-between items-center cursor-pointer py-4"
          >
            <h6 className="text-black font-bold">محدوده قیمت</h6>
            {priceClicked ? <ArrowDown /> : <ArrowDown reverse />}
          </div>
          {priceClicked ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span>از</span>
                <input
                  className="border border-gray rounded h-10 px-2 bg-white w-3/4"
                  type="number"
                  placeholder="۰"
                />
                <span>تومان</span>
              </div>
              <div className="flex items-center gap-2">
                <span>تا</span>
                <input
                  className="border border-gray rounded h-10 px-2 bg-white  w-3/4"
                  type="number"
                  placeholder="۵۰۰۰۰۰۰"
                />
                <span>تومان</span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Filterinng;
