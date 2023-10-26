import HeaderTabs from "@/components/NavBar/HeaderTabs";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import bilitoIcon from "@/assets/Images/Icons/BilitoIcone.png";
import tick from "@/assets/Images/Icons/Tick.png";
import { Link } from "react-router-dom";
import HomePageScreen from "@/components/NavBar/HomePageScreen";
import InputTextField from "@/components/Ui/InputTextField";
import Button from "@/components/Ui/Button";
function Login() {
  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      {showModal && (
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
                <br />
                <InputTextField placeholder={""}>نام کاربری</InputTextField>
                <br />
                <InputTextField placeholder={""}>پسورد</InputTextField>

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
                  <button className="bg-gray-650 text-gray-500 w-[536px] h-[48px] rounded-[8px] mt-4 mb-[32px]">
                    تایید و ادامه
                  </button>
                  <Link to={'/register'}>
                    <Button> ثبت نام</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
