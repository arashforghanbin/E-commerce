import Link from "next/link";
import * as React from "react";
import Account from "../../../assets/icons/Account";
import Cart from "../../../assets/icons/Cart";
import Logo from "../../../assets/icons/Logo";
import Search from "../../../assets/icons/Search";
import HamMenu from "../../custom/HamMenu";
import IconButton from "../../custom/IconButton";

const Navbar = () => {
  return (
    <nav className="bg-red-600 w-full h-[5.5rem] flex items-center justify-center shadow-xl">
      <div className="container flex items-center lg:justify-center justify-between">
        <div className="lg:hidden">
          <HamMenu />
        </div>
        <div>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className="hidden lg:flex flex-grow justify-center gap-10 text-yellow-300">
          <Link href="/">
            <a className="cursor-pointer font-bold">صفحه اصلی</a>
          </Link>
          <Link href="/products">
            <a className="cursor-pointer font-bold">محصولات</a>
          </Link>
          <Link href="/aboutus">
            <a className="cursor-pointer font-bold">درباره ما</a>
          </Link>
          <Link href="contactus">
            <a className="cursor-pointer font-bold">تماس با ما</a>
          </Link>
        </div>
        <div className="flex gap-4 pl-2">
          <IconButton onClick={() => console.log(true)}>
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
