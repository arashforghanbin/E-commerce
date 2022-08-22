import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from "../../../../redux/reducers/productsListReducer";
import { RootState } from "../../../../redux/store";
import EditIcon from "../../../assets/icons/EditIcon";
import { RoundBtn } from "../RoundBtn";
import UpdatPriceAndStockModal from "../UpdatPriceAndStockModal";

interface ProductProps {
  productName: string;
  quantity: number;
  hasDiscount: boolean;
  discount: number
}

const StockManagement = () => {
  const [isPriceAndStockModalOpen, setIsPriceAndStockModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | any>()
  const dispatch = useDispatch();

  const productsList = useSelector(
    (state: RootState) => state.productsList.productsList
  );

  React.useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  const handleEditPriceAndStock = (product: any) => {
    setSelectedProduct(product)
    setIsPriceAndStockModalOpen(true);
    // setProductName(product.productName);
    // setCategory(product.category);
    // setMadeIn(product.madeIn);
    // setPrice(product.price);
    // setImgLink(product.imgLink);
    // setTaste(product.taste);
    // setEngName(product.engName);
    // setWeight(product.weight);
  };

  return (
    <>
      <section className="bg-white w-[70%] mx-auto my-10  shadow-lg rounded-xl">
        <ul className="flex shadow-md">
          <li className="pr-4 w-[50%] py-6 font-bold">نام محصول</li>
          <li className="pr-4 w-[15%] py-6 font-bold">قیمت پایه(تومان)</li>
          <li className="pr-4 w-[15%] py-6 font-bold">درصد تخفیف</li>
          <li className="pr-4 w-[10%] py-6 font-bold">موجودی</li>
          <li className="pr-4 w-[10%] py-6 font-bold">مدیریت</li>
        </ul>
        <div className="managerProductList  max-h-96">
          {productsList &&
            productsList.map((item: any) => (
              <ul key={item.id} className="flex items-center">
                <li className="pr-4 w-[50%]  py-4">{item.productName}</li>
                <li className="pr-4 w-[15%] flex justify-center py-4">
                  {item.price}
                </li>
                <li className="pr-4 w-[15%] flex justify-center py-4">
                  {item.discount}
                </li>
                <li className="pr-4 w-[10%] flex justify-center py-4">
                  {item.quantity}
                </li>
                <li className="pr-4 w-[10%] flex justify-center py-4">
                  <RoundBtn onClick={()=> handleEditPriceAndStock(item)}>
                    <EditIcon />
                  </RoundBtn>
                </li>
              </ul>
            ))}
        </div>
      </section>

      {isPriceAndStockModalOpen && (
        <>
          <UpdatPriceAndStockModal
            setIsPriceAndStockModalOpen={setIsPriceAndStockModalOpen}
            product={selectedProduct}
          />
          <div
            onClick={() => setIsPriceAndStockModalOpen(false)}
            className="overlay h-full w-full z-40 fixed top-0 right-0"
          ></div>
        </>
      )}
      
    </>
  );
};

export default StockManagement;
