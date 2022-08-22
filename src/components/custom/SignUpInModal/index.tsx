import classNames from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsModalOpen } from "../../../../redux/reducers/modalReducer";
import Key from "../../../assets/icons/Key";
import Register from "../../../assets/icons/Register";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

interface SignUpFormValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpInModal = () => {
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(true);

  const dispatch = useDispatch();

  const handleRegisterToggle = () => {
    setIsRegisterClicked(true);
    setIsLoginClicked(false);
  };

  const handleSignInToggle = () => {
    setIsLoginClicked(true);
    setIsRegisterClicked(false);
  };

  const registerClasses = classNames(
    "flex items-center  py-2 px-4 rounded-lg text-red-600 text-lg font-bold cursor-pointer",
    isRegisterClicked ? "bg-red-600 text-yellow-300" : ""
  );
  const signInClasses = classNames(
    "flex items-center  py-2 px-4 rounded-lg text-red-600 text-lg font-bold cursor-pointer",
    isLoginClicked ? "bg-red-600 text-yellow-300" : ""
  );

  const signUpInitialValues: SignUpFormValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <>
      <div
        onClick={() => dispatch(setIsModalOpen(false))}
        className="fixed w-full h-full z-40 overlay"
      ></div>
    

      <section className=" fixed top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%] bg-yellow-300 p-8 flex flex-col gap-8 rounded-[2rem] shadow-lg z-50">
        <div className="flex items-center justify-center gap-8 mb-10">
          <button
            className={registerClasses}
            onClick={() => handleRegisterToggle()}
          >
            <span className="ml-2">
              <Register
                strokeColor={isRegisterClicked ? "#FFFCB5" : "#DC3A35"}
              />
            </span>
            ثبت نام
          </button>
          <button
            className={signInClasses}
            onClick={() => handleSignInToggle()}
          >
            <span className="ml-2">
              <Key strokeColor={isLoginClicked ? "#FFFCB5" : "#DC3A35"} />
            </span>
            ورود
          </button>
        </div>
        {isLoginClicked ? <SignIn /> : <SignUp />}
      </section>
    </>
  );
};

export default SignUpInModal;
