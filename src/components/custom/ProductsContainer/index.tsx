import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from "../../../../redux/reducers/productsListReducer";
import { RootState } from "../../../../redux/store";
import {
  discountCalc,
  spaceToUnderLine,
  underLineToSpace,
} from "../../../utils";
import MediumCard from "../MediumCard";
import Pagination from "../Pagination";
import { useRouter } from "next/router";
import Link from "next/link";

interface Product {
  bought: number;
  category: string;
  clicked: number;
  discount: number;
  engName: string;
  imgLink: string;
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
  const searchQuery = router.query.search;
  const searchedValue = underLineToSpace(searchQuery as string);

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

  const { chosenCategories } = useSelector(
    (state: RootState) => state.filterReducer
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
    } else if (chosenCategories.length > 0) {
      const foundCategoriesValue = copiedProductsList.filter((item) =>
        chosenCategories.includes(item.category)
      );
      setProducts(foundCategoriesValue);
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
                <Link
                  key={item.id}
                  href={"/product/" + spaceToUnderLine(item.productName)}
                >
                  <MediumCard
                    id={item.id}
                    productName={item.productName}
                    initialPrice={item.price}
                    imgAlt={item.engName}
                    imgLink={item.imgLink}
                    hasDiscount={item.hasDiscount}
                    discountAmount={item.discount}
                    discountPrice={discountCalc(
                      true,
                      item.discount,
                      item.price
                    )}
                  />
                </Link>
              );
            })
        ) : (
          <p className="py-4">موردی یافت نشد</p>
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
