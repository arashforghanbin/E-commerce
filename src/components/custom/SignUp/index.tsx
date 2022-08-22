import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { createDispatchHook, useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { setIsModalOpen } from "../../../../redux/reducers/modalReducer";
import {
  handleIsLoggedIn,
  handleUserLoggedIn,
} from "../../../../redux/reducers/userLoginReducer";
import { RootState } from "../../../../redux/store";
import Email from "../../../assets/icons/Email";
import Lock from "../../../assets/icons/Lock";
import Person from "../../../assets/icons/Person";
import Button from "../Button";
import CustomInput from "../CustomInput/CustomInput";

const URL = "http://localhost:3004/usersList";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const validateSignUp = Yup.object({
    userName: Yup.string()
      .min(3, "نام کاربری باید حداقل ۳ کاراکتر داشته باشد")
      .required("لطفا نام کاربری را وارد کنید!"),
    email: Yup.string()
      .email("ایمیل وارد شده صحیح نمی باشد")
      .required("لطفا ایمیل خود را وارد کنید!"),
    password: Yup.string()
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر داشته باشد")
      .required("لطفا رمز عبور خود را وارد کنید!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "رمز عبور مطابقت ندارد!")
      .required("رمز عبور خود را مجددا وارد کنید!"),
  });

  const isUserLoggedIn: boolean = useSelector(
    (state: RootState) => state.userLoginReducer.isLoggedIn
  );
  const userLoggedIn: any = useSelector(
    (state: RootState) => state.userLoginReducer.userLoggedIn
  );

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validateSignUp,
    onSubmit: async (values) => {
      const response = await axios.post(URL, {
        userName: values.userName,
        email: values.email,
        password: values.password,
        isAdmin: false,
      });

      dispatch(handleIsLoggedIn(true));

      dispatch(
        handleUserLoggedIn({
          userName: values.userName,
          password: values.password,
        })
      );

      dispatch(setIsModalOpen(false));
    },
  });

  return (
    <form
      noValidate
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-8"
    >
      <div>
        <CustomInput
          placeholder="نام کاربر"
          type="text"
          childOne={<Person />}
          name="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
        />
        {formik.errors.userName && formik.touched.userName ? (
          <p className="text-red-600 translate-x-[-1rem] text-sm">
            {formik.errors.userName}
          </p>
        ) : null}
      </div>
      <div>
        <CustomInput
          placeholder="ایمیل"
          type="email"
          childOne={<Email />}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email ? (
          <p className="text-red-600 translate-x-[-1rem] text-sm">
            {formik.errors.email}
          </p>
        ) : null}
      </div>
      <div>
        <CustomInput
          placeholder="رمز عبور"
          type="password"
          childOne={<Lock />}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && formik.touched.password ? (
          <p className="text-red-600 translate-x-[-1rem] text-sm">
            {formik.errors.password}
          </p>
        ) : null}
      </div>
      <div>
        <CustomInput
          placeholder="تکرار رمز عبور"
          type="password"
          childOne={<Lock />}
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
          <p className="text-red-600 translate-x-[-1rem] text-sm">
            {formik.errors.confirmPassword}
          </p>
        ) : null}
      </div>
      <Button type="submit" className="mt-10" variant="primary" size="sm">
        ثبت نام
      </Button>
    </form>
  );
};

export default SignUp;
