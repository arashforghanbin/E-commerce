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
import { useRouter } from "next/router";
import { spaceToUnderLine } from "../../../utils";
import Button from "../../custom/Button";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalOpen } from "../../../../redux/reducers/modalReducer";
import { RootState } from "../../../../redux/store";
import {
  handleIsLoggedIn,
  handleUserLoggedIn,
} from "../../../../redux/reducers/userLoginReducer";

const Navbar = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [accountClicked, setAccountClicked] = useState(false);

  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/products/?search=${spaceToUnderLine(searchInput)}`);
    setSearchClicked(false);
  };

  const overlayClasses = classNames(
    "w-full h-full  z-30",
    searchClicked || accountClicked ? "fixed" : "hidden"
  );

  const handleCloseSearchbarAndAccount = () => {
    setSearchClicked(false);
    setAccountClicked(false);
  };

  const dispatch = useDispatch();

  const handleLaunchModal = () => {
    dispatch(setIsModalOpen(true));
    setAccountClicked(false);
  };

  const isUserLoggedIn: boolean = useSelector(
    (state: RootState) => state.userLoginReducer.isLoggedIn
  );
  const userLoggedIn: any = useSelector(
    (state: RootState) => state.userLoginReducer.userLoggedIn
  );

  const handleLogOut = () => {
    dispatch(handleIsLoggedIn(false));
    dispatch(handleUserLoggedIn({ userName: "", password: "" }));
  };

  return (
    <>
      <div
        onClick={() => handleCloseSearchbarAndAccount()}
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
              <IconButton onClick={() => setSearchClicked(true)}>
                <Search />
              </IconButton>
              {searchClicked ? (
                <>
                  <div className="transform-origin-top absolute z-40 animate-swing bg-red-600 p-2 rounded-3xl w-80">
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
                </>
              ) : (
                ""
              )}
            </div>
            <div className="relative">
              <IconButton onClick={() => setAccountClicked(true)}>
                <Account />
              </IconButton>
              {accountClicked && (
                <div className="transform-origin-top animate-swing flex flex-col items-center gap-4 absolute w-60 py-4 px-4 rounded-xl z-40 bg-red-600">
                  {isUserLoggedIn ? (
                    <>
                      <p className="text-white">{userLoggedIn.userName}</p>
                      <Button
                        onClick={() => handleLogOut()}
                        variant="secondary"
                        size="sm"
                      >
                        خروج
                      </Button>
                    </>
                  ) : (
                    <>
                      <p className="text-white">کاربر ناشناس</p>
                      <Button
                        onClick={() => handleLaunchModal()}
                        variant="secondary"
                        size="sm"
                      >
                        ورود / ثبت نام
                      </Button>
                    </>
                  )}
                </div>
              )}
            </div>
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
