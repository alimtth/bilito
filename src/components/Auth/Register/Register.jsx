import InputTextField from "@/components/Ui/InputTextField";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bilitoIcon from "@/assets/Images/Icons/BilitoIcone.png";
import bilitoIcons from "@/assets/Images/Icons/FavIconBilito.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Buttons from "@/components/Ui/Button";
import axios from "axios";
import { useAuthContext } from "@/providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import  bilitoIconsss   from "@/assets/Images/Icons/AirplaneSelected.svg";

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
  const [isloding, setIsloding] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [error, setError] = useState(null);
  const {baseURL} = useAuthContext()

  const navigate = useNavigate();

  const { saveAccess } = useAuthContext();

  const handleCheckboxChange = () => {
    setIsButtonEnabled(true);
  }

  const onFormSubmit = async (data) => {
    console.log(data);
    if (isloding) return;

    try {
      setIsloding(true)
      const result = await axios.post(
        `${baseURL}auth/register`,
        data
      );

      saveAccess(result.data.token.accessToken)
      navigate("/")

      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      setIsloding(false);
    }
    setError("مشکل سرور");
  };


  {/* <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light" 
    >
    {error }
  </ToastContainer> */}
  return (
    <div>
      <div className="fixed inset-0 bg-blue-650 bg-opacity-10 backdrop-blur-[0.5px] flex justify-center items-center">
        
        <div className="w-[600px] fixed z-20 mt-[100px] opacity-75">
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
                  size='sm' type={"text"} register={register("username")} className="w-[530px] "
                >
                  شماره موبایل
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
                    <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                    <h4>
                      با ورود و ثبت‌نام در سایت، با{" "}
                      <Link className="text-blue-650" to={"#"}>
                        قوانین بیلیتو
                      </Link>{" "}
                      موافقت می‌کنم.
                    </h4>
                  </div>
                  <Buttons
                    className="bg-gray-650 text-white flex justify-center w-[536px] h-[48px] rounded-[8px] mt-4 mb-[32px]"
                    type="submit"
                    loading={isloding}
                    styles={{
                      backgroundColor: isButtonEnabled ? '#1D91CC' : '',
                    }}
                    disabled={!isButtonEnabled}
                  >
                    ثبت نام
                  </Buttons>
                  <Link to={"/login "} className="flex justify-center mb-1">
                    <Buttons l > ورود</Buttons>
                  </Link>
                </div>
              </form>
            </div>
           
          </div>
        </div>
      <img src={bilitoIcons} alt="" className="lg:w-96 z-0 blur-md relative right-[500px] bottom-[300px]  animate-spin transform rotate-3 " />
      <img src={bilitoIconsss} alt="" className="lg:w-96 z-10	 blur-md relative -right-[700px] rotate-12 animate-pulse inline-block transition-transform duration-75" />
      </div>
    </div>
  );
}

export default Register;
