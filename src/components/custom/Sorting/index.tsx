import { useDispatch, useSelector } from "react-redux";
import { selectedSortingOption } from "../../../../redux/reducers/sortReducer";
import { RootState } from "../../../../redux/store";

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

const Sorting = () => {
  const dispatch = useDispatch();
  const chosen = useSelector((state: RootState) => state.chosenOption);
  console.log(chosen);

  return (
    <section className="bg-white rounded-2xl shadow-md flex gap-5 h-16 items-center px-6">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 7H21"
          stroke="#1A1A1A"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M6 12H18"
          stroke="#1A1A1A"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M10 17H14"
          stroke="#1A1A1A"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <p className="font-bold">مرتب سازی:</p>
      <div className="flex gap-4">
        <div>
          <input
            className="radio-input"
            type="radio"
            name="sort"
            id="most-sales"
            value="mostSales"
            onChange={(e) => dispatch(selectedSortingOption(e.target.value))}
          />
          <label htmlFor="most-sales">پرفروش ترین</label>
        </div>
        <div>
          <input
            className="radio-input"
            type="radio"
            name="sort"
            id="most-viewed"
            value="mostViewed"
            onChange={(e) => dispatch(selectedSortingOption(e.target.value))}
          />
          <label htmlFor="most-viewed">پربازدیدترین</label>
        </div>
        <div>
          <input
            className="radio-input"
            type="radio"
            name="sort"
            id="cheapest"
            value="cheapest"
            onChange={(e) => dispatch(selectedSortingOption(e.target.value))}
          />
          <label htmlFor="cheapest">ارزان ترین</label>
        </div>
        <div>
          <input
            className="radio-input"
            type="radio"
            name="sort"
            id="most-expensive"
            value="mostExpensive"
            onChange={(e) => dispatch(selectedSortingOption(e.target.value))}
          />
          <label htmlFor="most-expensive">گران ترین</label>
        </div>
      </div>
    </section>
  );
};

export default Sorting;
