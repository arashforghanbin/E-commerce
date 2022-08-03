import { NextPage } from "next";
import Filterinng from "../src/components/custom/Filtering";
import Sorting from "../src/components/custom/Sorting";

const Products: NextPage = () => {
  return (
    <main className="container my-12 px-10 mx-auto flex gap-5 relative">
      <Filterinng />
      <div className="flex flex-col gap-5 w-4/5">
        <Sorting/>
      </div>
    </main>
  );
};

export default Products;
