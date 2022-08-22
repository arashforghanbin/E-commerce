import * as React from "react";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "../CustomInput/CustomInput";
import Person from "../../../assets/icons/Person";
import Lock from "../../../assets/icons/Lock";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import axios from "axios";
import {
  handleIsLoggedIn,
  handleUserLoggedIn,
} from "../../../../redux/reducers/userLoginReducer";
import { setIsModalOpen } from "../../../../redux/reducers/modalReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
const userURL = "http://localhost:3004/usersList";

const SignIn = () => {
  const [usersList, setUsersList] = useState<any[]>([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const validatSignIn = Yup.object({
    userNameOrEmail: Yup.string()
      .min(3, "نام کاربری باید حداقل ۳ کاراکتر داشته باشد")
      .required("لطفا نام کاربری یا ایمیل را وارد کنید!"),
    password: Yup.string()
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر داشته باشد")
      .required("لطفا رمز عبور را وارد کنید!"),
  });

  const isUserLoggedIn: boolean = useSelector(
    (state: RootState) => state.userLoginReducer.isLoggedIn
  );
  const userLoggedIn: any = useSelector(
    (state: RootState) => state.userLoginReducer.userLoggedIn
  );

  const fetchUsersList = async () => {
    const response = await axios.get(userURL);
    setUsersList(response.data);
  };

  useEffect(() => {
    fetchUsersList();
  }, []);

  const formik = useFormik({
    initialValues: { userNameOrEmail: "", password: "" },
    validationSchema: validatSignIn,
    onSubmit: (values) => {
      const foundUser = usersList.find(
        (user) =>
          user.userName === values.userNameOrEmail ||
          (user.email === values.userNameOrEmail &&
            user.password === values.password)
      );
      if (foundUser) {
        if (foundUser.isAdmin === false) {
          dispatch(handleIsLoggedIn(true));
          dispatch(
            handleUserLoggedIn({
              userName: foundUser.userName,
              password: foundUser.password,
            })
          );
          dispatch(setIsModalOpen(false));
        } else {
          router.push("http://localhost:3000/manage");
          dispatch(setIsModalOpen(false));
        }
      } else {
        toast.error("نام کاربری یا رمز عبور اشتباه است!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
  });

  return (
    <>
      <ToastContainer
        bodyClassName="toastify-class"
        className="fixed z-50"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form
        noValidate
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-8"
      >
        <div>
          <CustomInput
            placeholder="نام کاربر یا ایمیل |"
            type="text"
            name="userNameOrEmail"
            childOne={<Person />}
            value={formik.values.userNameOrEmail}
            onChange={formik.handleChange}
          />
          {formik.errors.userNameOrEmail && formik.touched.userNameOrEmail ? (
            <p className="text-red-600 translate-x-[-1rem] text-sm">
              {formik.errors.userNameOrEmail}
            </p>
          ) : null}
        </div>
        <div>
          <CustomInput
            placeholder="رمز عبور"
            type="password"
            name="password"
            childOne={<Lock />}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="text-red-600 translate-x-[-1rem] text-sm">
              {formik.errors.password}
            </p>
          ) : null}
        </div>
        <Button className="mt-10" variant="primary" size="sm">
          ورود
        </Button>
      </form>
    </>
  );
};

export default SignIn;
