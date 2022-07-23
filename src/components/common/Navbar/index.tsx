import * as React from "react";
import Account from "../../../assets/icons/Account";
import Cart from "../../../assets/icons/Cart";
import Logo from "../../../assets/icons/Logo";
import Search from "../../../assets/icons/Search";
import IconButton from "../../custom/IconButton";

const Navbar = () => {
  return (
    <nav className="bg-red-600 w-full h-[5.5rem] flex items-center justify-center">
      <div className="container flex items-center justify-center">
        <div>
          <Logo />
        </div>
        <div className="flex flex-grow justify-center gap-10 text-yellow-300">
          <a className="cursor-pointer">صفحه اصلی</a>
          <a className="cursor-pointer">محصولات</a>
          <a className="cursor-pointer">درباره ما</a>
          <a className="cursor-pointer">تماس با ما</a>
        </div>
        <div className="flex gap-4">
          <IconButton onClick={() => setAnimationEffect(true)}>
            <Search />
          </IconButton>
          <IconButton>
            <Account />
          </IconButton>
          <IconButton>
            <Cart />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
