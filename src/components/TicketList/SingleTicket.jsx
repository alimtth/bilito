import React from 'react';
import Button from "@/components/Ui/Button.jsx";

function SingleTicket(props) {
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
            <div className='flex border-gray-10 border rounded-lg flex-col gap-4 mt-6 justify-evenly py-6'>
                {ticetListItem.map((item, index) => (
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
                ))}
            </div>
        </>

    );
}

export default SingleTicket;