import React, { useState } from 'react';
import Button from "@/components/Ui/Button.jsx";

function SingleTicket(props) {
    const [isloding, setIsloding] = useState(true);

    setTimeout(() => {
        setIsloding(false)
    }, 10000);
    const ticetListItem = [
        {
            num: 1,
            price: 2000,

        },
        // {
        //     num: 2,
        //     price: 4300,

        // },
        // {
        //     num: 3,
        //     price: 5000,

        // },
        // {
        //     num: 4,
        //     price: 2400,

        // }
    ]
    return (
        <>
            <div className='flex border-gray-10 border rounded-lg flex-col gap-4 mt-6 justify-evenly '>
                {isloding ? (
                    <div className="flex w-[100%] h-[200px] mx-auto overflow-hidden bg-white rounded-lg shadow-lg animate-pulse dark:bg-gray-800">
                        <div className="w-1/4 bg-gray-300 dark:bg-gray-600"></div>
                        <div className=" p-4 md:p-4">
                            <h1 className="w-40 h-2 bg-gray-300 rounded-lg dark:bg-gray-700"></h1>

                            <p className="w-48 h-2 mt-4 bg-gray-450 rounded-lg dark:bg-gray-700"></p>

                            <div className="flex mt-4 item-center gap-x-2">
                                <p className="w-5 h-2  bg-gray-450 rounded-lg dark:bg-gray-20"></p>
                                <p className="w-5 h-2  bg-gray-450 rounded-lg dark:bg-gray-20"></p>
                                <p className="w-5 h-2  bg-gray-450 rounded-lg dark:bg-gray-20"></p>
                                <p className="w-5 h-2  bg-gray-450 rounded-lg dark:bg-gray-20"></p>
                                <p className="w-5 h-2  bg-gray-450 rounded-lg dark:bg-gray-20"></p>
                                <p className="w-5 h-2  bg-gray-450 rounded-lg dark:bg-gray-20"></p>
                            </div>

                            <div className="flex justify-between mt-6 item-center">
                                <h1 className="w-10 h-2  bg-gray-450 rounded-lg dark:bg-gray-500"></h1>

                                <div className="h-4 bg-gray-450 rounded-lg w-28 dark:bg-gray-700"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    ticetListItem.map((item, index) => (
                        <div key={index}>
                            <div className='flex justify-between items-center px-4 lg:flex-row flex-col gap-4'>
                                <div className='flex justify-center items-center gap-2' >
                                    <div
                                        className='bg-red-10 text-red-20 flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md'>{item.num}
                                        صندلی باقی مانده
                                    </div>
                                    <div
                                        className='bg-red-10 text-red-20 flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md'>غیر
                                        قابل استرداد
                                    </div>
                                </div>
                                <div className='flex justify-center items-center gap-[8px]'>
                                    <div
                                        className='bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md'>اکونومی
                                    </div>
                                    <div
                                        className='bg-blue-100 text-blue-500  flex justify-center items-center gap-1 py-[2px] px-2 h-6 border rounded-md'>سیستمی
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-end gap-[64px] px-4 lg:flex-row flex-col'>
                                <div className='flex justify-center items-center gap-[24px]'>
                                    <div className='flex flex-col gap-[16px] items-center'>
                                        <img alt={''} src={''} />
                                        <span>Gulf Air</span>
                                    </div>
                                    <div className='flex flex-col gap-4 items-center'>
                                        <span>02:50</span>
                                        <span>استانبول(SAW)</span>
                                    </div>
                                    <div className='flex flex-col gap-4 items-center'>
                                        <span>19:00</span>
                                        <span><img alt={''} src={''} /></span>
                                        <span>20kg</span>
                                    </div>
                                    <div className='flex flex-col gap-4 items-center'>
                                        <span>21:50</span>
                                        <span>دبی(DXB)</span>
                                    </div>
                                </div>
                                <div className='flex lg:justify-center lg:items-end gap-2 items-center self-center'>
                                    <div>{item.price} تومان</div>
                                    <div>
                                        <Button size='lg'>جزئیات بلیط</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>

    );
}

export default SingleTicket;