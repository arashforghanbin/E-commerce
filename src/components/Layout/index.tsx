import * as React from "react";
import { ReactElement } from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

interface Props {
  children?: ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
