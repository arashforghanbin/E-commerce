import classNames from "classnames";
import Link from "next/link";
import * as React from "react";
import Account from "../../../assets/icons/Account";
import Cart from "../../../assets/icons/Cart";
import Logo from "../../../assets/icons/Logo";
import Search from "../../../assets/icons/Search";
import HamMenu from "../../custom/HamMenu";
import IconButton from "../../custom/IconButton";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { spaceToUnderLine } from "../../../utils";

const Navbar = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearchBarPop = () => {
    setSearchClicked(true);
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/products/?search=${spaceToUnderLine(searchInput)}`);
    setSearchClicked(false);
  };

  const overlayClasses = classNames(
    "w-full h-full  z-30",
    searchClicked ? "fixed" : "hidden"
  );

  const handleCloseSearchbar = () => {
    setSearchClicked(false);
  };

  return (
    <>
      <div
        onClick={() => handleCloseSearchbar()}
        className={overlayClasses}
      ></div>
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
            <div className="relative">
              <IconButton onClick={() => handleSearchBarPop()}>
                <Search />
              </IconButton>
              {searchClicked ? (
                <>
                  <div className="searchbar absolute z-40 animate-swing bg-red-600 p-2 rounded-3xl w-80">
                    <form
                      onSubmit={(e) => handleSearch(e)}
                      className="flex bg-white rounded-[5rem] overflow-hidden"
                    >
                      <input
                        className=" w-full pr-3"
                        type="text"
                        placeholder="جستجو"
                        onChange={(e) => setSearchInput(e.target.value)}
                      />

                      <button
                        type="submit"
                        className=" bg-green-600 hover:bg-green-700 active:bg-green-500 p-3 rounded-full translate-y-0"
                      >
                        <Search />
                      </button>
                    </form>
                  </div>
                  <div className="z-30 fixed h-full bg-gray"></div>
                </>
              ) : (
                ""
              )}
            </div>
            <IconButton>
              <Account />
            </IconButton>
            <IconButton>
              <Cart />
            </IconButton>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
