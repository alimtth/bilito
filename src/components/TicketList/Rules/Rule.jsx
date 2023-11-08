import { Link, Outlet } from 'react-router-dom';
import close from "@/assets/Images/Icons/close-square.svg";
import Buttons from "@/components/Ui/Button"

function Rule() {

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-50 ">
                        <div className=" bg-white  w-[900px] rounded-lg  shadow-lg z-50 py-7 px-5">
                            <div className="flex justify-end">
                                <Link to={"/ticket"}>
                                <img src={close} alt="" />
                                </Link>
                            </div>
                            <div className="flex gap-6">
                                <ul>اطلاعات پرواز</ul>
                                <ul>قوانین استرداد</ul>
                                <ul>قوانین ویزا و مسیر</ul>
                                <ul>بار مجاز</ul>
                            </div>
                            <hr className='w-full bg-gray-400 h-0.5 mt-3 mb-5' />
                            <div className="flex flex-col gap-8">
                                <h3 className='font-bold'>قوانین استرداد</h3>
                                <p>70 درصد جریمه: از ساعت 11:00 صبح  8 روز قبل از پرواز تا ساعت 11:00 صبح 3 روز قبل از پرواز.</p>
                                <p>55 درصد جریمه: از زمان صدور بلیط تا ساعت 11:00 صبح 8 روز قبل از پرواز.</p>
                                <p>80 درصد جریمه: از ساعت 11:00 صبح  3 روز قبل از پرواز تا ساعت 11:00 صبح 2 روز قبل از پرواز.</p>
                                <p>100 درصد جریمه: از ساعت 11:00 صبح  2 روز قبل از پرواز به بعد.</p>
                                <hr className='w-full bg-gray-400 h-0.5 mt-3 mb-5' />
                                <h3 className='font-bold'>قوانین تغییرات بلیط</h3>
                                <p>تا 24 ساعت مانده به پرواز به مسافران جهت تغییر رزرو جریمه ای تعلق نمی‌گیرد. (هزینه تغییر کلاس نرخی دریافت می‌شود) از 24 ساعت مانده به پرواز به بعد به‌ازای هر مسافر در هر مسیر پروازی، جریمه تغییر رزرو معادل 1٬300٬000 تومان ایران (باضافه هزینه تغییر کلاس نرخی) می‌باشد.</p>
                            </div>
                            
                                <div className="flex justify-end items-center gap-3 mt-5">
                                    <div className="flex text-blue-500 gap-2">
                                        <h2>مجموع پرداختی شما</h2>
                                        <p>34,410,462</p>
                                        <p>تومان</p>
                                    </div>
                                    <Link to={"grule"}>
                                    <Buttons variant='fill' className={"w-[300px] justify-center"}>
                                            ادامه
                                    </Buttons>
                                    </Link>
                                </div>

                            </div>
                            <main>
                                <Outlet />
                            </main>
                        </div>
        </div>
    );
}

export default Rule;