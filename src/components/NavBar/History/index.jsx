import React from "react";
import ArrowLeft from "@/assets/Images/Icons/arrow-left.svg";
import ArrowRight from "@/assets/Images/Icons/arrow-right.svg";
import HistoryIcon from "@/assets/Images/Icons/History.svg";
import CloseSquare from "@/assets/Images/Icons/close-square.svg";
import Button from "@/components/Ui/Button";


function History() {
    return (
        <div className="flex flex-col gap-4 mt-44 flex-wrap" id='container'>
            <div className="flex justify-between">
                <div className="flex justify-between gap-4">
                    <img src={HistoryIcon}/>
                    <p>تاریخچه جستجو</p>
                </div>
                <p className="text-blue-500 cursor-pointer">پاک کردن همه</p>
            </div>
            <div className="flex flex-row gap-9 justify-between flex-wrap">
                <Button className='hidden md:flex' variant="grayBTN">
                    <img src={ArrowRight}/>
                </Button>
                <div className="flex flex-row gap-4 flex-wrap">
                    <Button  variant="grayBTN">
                        <img src={CloseSquare}/>
                        تهران به استانبول
                    </Button>

                    <Button  variant="grayBTN">
                        <img src={CloseSquare}/>
                        تهران به دبی
                    </Button>

                    <Button  variant="grayBTN">
                        <img src={CloseSquare}/>
                        تهران به شیراز
                    </Button>

                    <Button  variant="grayBTN">
                        <img src={CloseSquare}/>
                        شیراز به تهران
                    </Button>

                    <Button  variant="grayBTN">
                        <img src={CloseSquare}/>
                        شیراز به اصفهان
                    </Button>
                </div>
                <Button className='hidden md:flex' variant="grayBTN">
                    <img src={ArrowLeft}/>
                </Button>
            </div>
        </div>
    );
}

export default History;
