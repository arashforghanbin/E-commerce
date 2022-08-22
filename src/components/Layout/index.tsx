import * as React from "react";
import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import SignUpInModal from "../custom/SignUpInModal";

interface Props {
  children?: ReactElement;
}

const Layout = ({ children }: Props) => {
  const { isModalOpen } = useSelector((state: RootState) => state.modalReducer);

  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
      {isModalOpen && <SignUpInModal />}
    </div>
  );
};

export default Layout;
