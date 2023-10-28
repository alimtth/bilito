import React, { useState } from "react";
import bilitoIcon from "@/assets/Images/Icons/BilitoIcone.png";
import userIconLog from "@/assets/Images/Icons/UserIconLog.svg";
import CallIcon from "@/assets/Images/Icons/CallIcon.svg";
import arrowDown from "@/assets/Images/Icons/arrow-down.svg";
import Button from "@/components/Ui/Button";
import "../style.css";
import { Link } from "react-router-dom";

function HeaderTabs({ onClick }) {
  return (
    <>
      <div className="flex justify-between items-center py-4 xl:w-[1228px] xl:m-auto">
        <div className="flex justify-between gap-16">
          <img src={bilitoIcon} />
          <div className="flex justify-between gap-16">
          <ul className="flex justify-between items-center gap-8 text-sm">
            <li className="cursor-pointer">صفحه اصلی</li>
            <li className="cursor-pointer">سفرهای من</li>
            <li className="flex justify-between gap-2 cursor-pointer">
              سایر موارد
              <img src={arrowDown} />
            </li>
          </ul>
          </div>
        </div>

        <div className="flex justify-between gap-8">
          <div className="inline-flex items-center gap-2 opacity-80">
            <p>4045_021</p>
            <p>پشتیبانی</p>
            <img src={CallIcon} />
          </div>
          <Link to={"/login"}>
            <Button variant="fill">
              <img src={userIconLog} />
              <div> ورود/ ثبت نام</div>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeaderTabs;
