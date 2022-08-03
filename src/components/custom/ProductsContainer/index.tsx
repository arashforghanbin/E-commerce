import { current } from "@reduxjs/toolkit";
import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { discountCalc, textTruncate } from "../../../utils";
import MediumCard from "../MediumCard";
import Pagination from "../Pagination";

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
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrenPage] = React.useState(1);
  const [productsPerPage] = React.useState(12);

  const dataList: Product[] | undefined | any = useSelector(
    (state: RootState) => state.productsList.productsList[0]
  );

  const { chosenOption } = useSelector(
    (state: RootState) => state.chosenOption
  );

  let copiedProductsList: Product[] = [];
  if (dataList !== undefined) {
    copiedProductsList = [...dataList];
  }

  const [products, setProducts] = React.useState(copiedProductsList);

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
  }, [chosenOption]);

  //GETTING CURRENT POST
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // change page
  const paginate = (pageNumber: number) => setCurrenPage(pageNumber);

  return (
    <>
      <section className="bg-white w-full shadow-md p-4 rounded-[2rem] flex gap-6 flex-wrap justify-center">
        {currentProducts &&
          currentProducts.map((item: any) => {
            return (
              <MediumCard
                productName={textTruncate(item.productName, 21)}
                initialPrice={item.price}
                imgAlt={item.engName}
                imgLink={item.file}
                hasDiscount={item.hasDiscount}
                discountAmount={item.discount}
                discountPrice={discountCalc(true, item.discount, item.price)}
              />
            );
          })}
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
