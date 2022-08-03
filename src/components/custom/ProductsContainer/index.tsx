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
  let copiedProductsList: Product[] = [];
  if (dataList !== undefined) {
    copiedProductsList = [...dataList];
  }

  //GETTING CURRENT POST
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = copiedProductsList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // change page
  const paginate = (pageNumber: number) => setCurrenPage(pageNumber);

  return (
    <>
      <section className="bg-white w-full shadow-md p-4 rounded-[2rem] flex gap-6 flex-wrap justify-center">
        {currentProducts &&
          currentProducts.map((item) => {
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
        totalPosts={copiedProductsList.length}
        paginate={paginate}
      />
    </>
  );
};

export default ProductsContainer;
