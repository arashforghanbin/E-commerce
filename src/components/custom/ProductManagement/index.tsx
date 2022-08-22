import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from "../../../../redux/reducers/productsListReducer";
import { RootState } from "../../../../redux/store";
import EditIcon from "../../../assets/icons/EditIcon";
import ShowIcon from "../../../assets/icons/ShowIcon";
import Trash from "../../../assets/icons/Trash";
import AddProductModal from "../AddProductModal";
import Button from "../Button";
import { RoundBtn } from "../RoundBtn";
import UpdateProductModal from "../UpdateProductModal";
import ViewProductModal from "../ViewProductModal";

const ProductManagement = () => {
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isViewProductModalOpen, setIsViewProductModalOpen] = useState(false);
  const [isUpdateProductModalOpen, setIsUpdateProductModalOpen] =
    useState(false);
  const [id, setId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("toffeeAndChocolate");
  const [imgLink, setImgLink] = useState("");
  const [madeIn, setMadeIn] = useState("");
  const [taste, setTaste] = useState("");
  const [engName, setEngName] = useState("");
  const [weight, setWeight] = useState<number | null>(0);

  const dispatch = useDispatch();

  const productsList = useSelector(
    (state: RootState) => state.productsList.productsList
  );

  React.useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  const handleDeleteProduct = async (id: string) => {
    await axios.delete(`http://localhost:3004/productsList/${id}`);
    dispatch(fetchProductsList());
  };

  const handleViewProduct = (product: any) => {
    setIsViewProductModalOpen(true);
    setProductName(product.productName);
    setCategory(product.category);
    setMadeIn(product.madeIn);
    setPrice(product.price);
    setImgLink(product.imgLink);
    setTaste(product.taste);
    setEngName(product.engName);
    setWeight(product.weight);
  };

  const handleUpdateProduct = (product: any) => {
    setId(product.id);
    setIsUpdateProductModalOpen(true);
    setProductName(product.productName);
    setCategory(product.category);
    setMadeIn(product.madeIn);
    setPrice(product.price);
    setImgLink(product.imgLink);
    setTaste(product.taste);
    setEngName(product.engName);
    setWeight(product.weight);
  };

  return (
    <>
      <section className="bg-white  my-10  shadow-lg rounded-xl">
        <ul className="flex shadow-md">
          <li className="pr-4 w-[30%] py-6 font-bold">نام محصول</li>
          <li className="pr-4 w-[20%] py-6 font-bold">دسته بندی</li>
          <li className="pr-4 w-[10%] py-6 font-bold">ساخت کشور</li>
          <li className="pr-4 w-[10%] py-6 font-bold">وزن</li>
          <li className="pr-4 w-[15%] py-6 font-bold">طعم</li>
          <li className="pr-4 w-[15%] py-6 font-bold">مدیریت</li>
        </ul>
        <div className="managerProductList max-h-96">
          {productsList &&
            productsList.map((item: any) => (
              <ul key={item.id} className="flex items-center">
                <li className="pr-4 w-[30%] py-4">{item.productName}</li>
                <li className="pr-4 w-[20%] py-4">{item.category}</li>
                <li className="pr-4 w-[10%] py-4">{item.madeIn}</li>
                <li className="pr-4 w-[10%] py-4">{item.weight} گرم</li>
                <li className="pr-4 w-[15%] py-4">{item.taste}</li>
                <li className="flex  gap-2 pr-4 w-[15%] py-4">
                  <RoundBtn onClick={() => handleDeleteProduct(item.id)}>
                    <Trash />
                  </RoundBtn>
                  <RoundBtn onClick={() => handleUpdateProduct(item)}>
                    <EditIcon />
                  </RoundBtn>
                  <RoundBtn onClick={() => handleViewProduct(item)}>
                    <ShowIcon />
                  </RoundBtn>
                </li>
              </ul>
            ))}
        </div>
      </section>
      <div className="mb-10">
        <Button
          onClick={() => setIsAddProductModalOpen(true)}
          size="sm"
          variant="primary"
        >
          <div className="flex items-center gap-2">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 15H5M15 25V15V25ZM15 15V5V15ZM15 15H25H15Z"
                stroke="#FFFCB5"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span>اضافه کردن محصول جدید</span>
          </div>
        </Button>
      </div>
      {isAddProductModalOpen && (
        <>
          <AddProductModal
            setIsAddProductModalOpen={setIsAddProductModalOpen}
          />
          <div
            onClick={() => setIsAddProductModalOpen(false)}
            className="overlay h-full w-full z-40 fixed top-0 right-0"
          ></div>
        </>
      )}
      {isViewProductModalOpen && (
        <>
          <ViewProductModal
            productName={productName}
            price={price}
            category={category}
            imgLink={imgLink}
            madeIn={madeIn}
            taste={taste}
            engName={engName}
            weight={weight}
          />
          <div
            onClick={() => setIsViewProductModalOpen(false)}
            className="overlay h-full w-full z-40 fixed top-0 right-0"
          ></div>
        </>
      )}
      {isUpdateProductModalOpen && (
        <>
          <UpdateProductModal
            id={id}
            productName={productName}
            price={price}
            category={category}
            imgLink={imgLink}
            madeIn={madeIn}
            taste={taste}
            engName={engName}
            weight={weight}
            setIsUpdateProductModalOpen={setIsUpdateProductModalOpen}
          />
          <div
            onClick={() => setIsUpdateProductModalOpen(false)}
            className="overlay h-full w-full z-40 fixed top-0 right-0"
          ></div>
        </>
      )}
    </>
  );
};

export default ProductManagement;
