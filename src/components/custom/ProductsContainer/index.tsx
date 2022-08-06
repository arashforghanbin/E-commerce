import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from "../../../../redux/reducers/productsListReducer";
import { RootState } from "../../../../redux/store";
import { discountCalc, textTruncate, underLineToSpace } from "../../../utils";
import MediumCard from "../MediumCard";
import Pagination from "../Pagination";
import { useRouter } from "next/router";

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

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchedValue = underLineToSpace(router.query.search);

  React.useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  const [currentPage, setCurrenPage] = React.useState(1);
  const [productsPerPage] = React.useState(12);

  const { chosenOption } = useSelector(
    (state: RootState) => state.chosenOption
  );

  const productsList = useSelector(
    (state: RootState) => state.productsList.productsList
  );

  let copiedProductsList: Product[] = [];
  if (productsList !== undefined || [] || null) {
    copiedProductsList = [...productsList];
  }

  const [products, setProducts] = React.useState(copiedProductsList);

  React.useEffect(() => {
    if (searchedValue) {
      const foundSearchedValue = copiedProductsList.filter((items) =>
        items.productName.includes(searchedValue)
      );
      setProducts(foundSearchedValue);
    } else {
      setProducts(copiedProductsList);
    }
  }, [copiedProductsList, searchedValue]);

  React.useEffect(() => {
    switch (chosenOption) {
      case "mostSales":
        setProducts(
          products.sort((a: Product, b: Product) => b.bought - a.bought)
        );
        break;
      case "mostViewed":
        setProducts(
          products.sort((a: Product, b: Product) => b.clicked - a.clicked)
        );
        break;
      case "cheapest":
        setProducts(
          products.sort((a: Product, b: Product) => b.price - a.price)
        );
        break;
      case "mostExpensive":
        setProducts(
          products.sort((a: Product, b: Product) => a.price - b.price)
        );
        break;

      default:
        break;
    }
  }, [chosenOption, products]);

  //GETTING CURRENT POST
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // change page
  const paginate = (pageNumber: number) => setCurrenPage(pageNumber);

  return (
    <>
      <section className="bg-white w-full shadow-md p-4 rounded-[2rem] flex gap-6 flex-wrap justify-center">
        {products.length > 0 ? (
          products
            .slice(indexOfFirstProduct, indexOfLastProduct)
            .map((item: any) => {
              return (
                <MediumCard
                  key={item.id}
                  productName={textTruncate(item.productName, 21)}
                  initialPrice={item.price}
                  imgAlt={item.engName}
                  imgLink={item.file}
                  hasDiscount={item.hasDiscount}
                  discountAmount={item.discount}
                  discountPrice={discountCalc(true, item.discount, item.price)}
                />
              );
            })
        ) : (
          <p>موردی یافت نشد</p>
        )}
      </section>
      <Pagination
        postsPerPage={productsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </>
  );
};

export default ProductsContainer;
