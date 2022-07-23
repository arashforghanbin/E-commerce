import type { NextPage } from "next";
import Button from "../src/components/custom/Button";
import Layout from "../src/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-grow">
        <h1>This is gonna be the home page.</h1>
      </div>
    </Layout>
  );
};

export default Home;
