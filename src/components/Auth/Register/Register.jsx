import InputTextField from "@/components/Ui/InputTextField";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import bilitoIcon from "@/assets/Images/Icons/BilitoIcone.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Buttons from "@/components/Ui/Button";
import axios from "axios";

const schema = yup.object().shape({
  username: yup.string().required("فیلد نام کاربری اجباری است"),
  password: yup.string().min(4).max(8).required("فیلد پسورد اجباری است"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "تکرار پسورد اشتباه است")
    .required(),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = async (data) => {
    console.log(data);

    try {
      const result = await axios.post(
        "http://demo2578450.mockable.io/auth/register",
        data
      );
      console.log(result);
    }catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-[0.5px] flex justify-center items-center">
        <div className="w-[600px]">
          <div className="bg-white p-2 rounded-[8px]">
            <div className="flex flex-col items-center">
              <img
                src={bilitoIcon}
                alt=""
                className="w-[96px] flex justify-center mt-8"
              />
              <h3 className="font-semibold mt-7 flex justify-center text-[20px]">
                ورود یا ثبت نام
              </h3>

              <h6 className="-mr-[150px] font-normal text-gray-600 mt-[32px] mb-[16px]">
                کد تایید به شماره موبایلی که وارد می‌کنید، ارسال خواهد شد.
              </h6>
              <form
                className="flex flex-col justify-start items-start px-6"
                onSubmit={handleSubmit(onFormSubmit)}
              >
                <InputTextField
                  size='sm' type={"text"} register={register("username")} className="w-[530px] " value={"sa"}
                >
                  نام کاربری
                </InputTextField>
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username?.message}</p>
                )}
                <br />
                <InputTextField
                  size='sm'
                  className="w-[530px]"
                  placeholder={""}
                  register={register("password")}
                >
                  پسورد
                </InputTextField>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1"> {errors.password?.message}</p>
                )}
                <br />
                <InputTextField
                  size='sm'
                  className="w-[530px]"
                  placeholder={""}
                  
                  register={register("confirmPassword")}
                >
                  تکرار رمز عبور
                </InputTextField>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword?.message}</p>
                )}

                <div>
                  <div className="flex gap-4  mt-[40px] text-gray-600 mr-4">
                    <input type="checkbox" name="" id="" />
                    <h4>
                      با ورود و ثبت‌نام در سایت، با{" "}
                      <Link className="text-blue-650" to={"#"}>
                        قوانین بیلیتو
                      </Link>{" "}
                      موافقت می‌کنم.
                    </h4>
                  </div>
                  <button
                    className="bg-gray-650 text-gray-500 w-[536px] h-[48px] rounded-[8px] mt-4 mb-[32px]"
                    type="submit"
                  >
                    تایید و ادامه
                  </button>
                  <Link to={"/login "} className="flex justify-center mb-1">
                    <Buttons> ورود</Buttons>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
