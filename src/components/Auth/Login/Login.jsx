import React, { useState } from "react";
import bilitoIcon from "@/assets/Images/Icons/BilitoIcone.png";
import { Link } from "react-router-dom";
import InputTextField from "@/components/Ui/InputTextField";
import Button from "@/components/Ui/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import bilitoIconsss from "@/assets/Images/Icons/AirplaneSelected.svg";
import bilitoIcons from "@/assets/Images/Icons/FavIconBilito.png";

const schema = yup.object().shape({
  username: yup.string().required("فیلد نام کاربری اجباری است"),
  password: yup.string().min(4).max(8).required("فیلد پسورد اجباری است"),
})
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const [showModal, setShowModal] = useState(true);

  const onFormSubmit = (d) => {
    console.log(d);

  }

  const openModal = () => {
    setShowModal(true);
  };


  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 bg-blue-650 bg-opacity-10 backdrop-blur-[0.5px] flex justify-center items-center">
          <div className="w-[600px] opacity-75">
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
                <br />
                <form
                  onSubmit={handleSubmit(onFormSubmit)}
                  className="flex flex-col justify-start items-start px-6"
                >
                  <InputTextField
                    size='xl'
                    placeholder={""}
                    register={register("username")}
                    className="w-[530px]"
                  >
                    نام کاربری
                  </InputTextField>
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username?.message}</p>
                  )}
                  <br />
                  <InputTextField
                    size='md'
                    placeholder={""}
                    register={register("password")}
                    className="w-[530px]"
                  >
                    پسورد

                  </InputTextField>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1"> {errors.password?.message}</p>
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
                      type="submit"
                      className="bg-gray-650 text-gray-500 w-[536px] h-[48px] rounded-[8px] mt-4 mb-[32px]"
                    >
                      تایید و ادامه
                    </button>
                    <Link to={"/register"} className="flex justify-center mb-1">
                      <Button> ثبت نام</Button>
                    </Link>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      )}
      <img src={bilitoIconsss} alt="" className="lg:w-96 z-10	 blur-md relative right-[1290px] rotate-12 animate-pulse inline-block" />
    </div>
  );
}


export default Login;