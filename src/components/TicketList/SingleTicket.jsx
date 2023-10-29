import React from 'react';
import Button from "@/components/Ui/Button.jsx";

function SingleTicket(props) {
    return (
        <>
            <div className='flex border-gray-10 border rounded-[8px] flex-col gap-[16px] mt-6 justify-evenly py-[24px]'>
                <div className='flex justify-between items-center px-4 md:flex-row flex-col gap-4'>
                    <div className='flex justify-center items-center gap-[8px]'>
                        <div
                            className='bg-red-10 text-red-20 flex justify-center items-center gap-[4px] py-[2px] px-[8px] h-[24px] border rounded-md'>5
                            صندلی باقی مانده
                        </div>
                        <div
                            className='bg-red-10 text-red-20 flex justify-center items-center gap-[4px] py-[2px] px-[8px] h-[24px] border rounded-md'>غیر
                            قابل استرداد
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-[8px]'>
                        <div
                            className='bg-blue-100 text-blue-500  flex justify-center items-center gap-[4px] py-[2px] px-[8px] h-[24px] border rounded-md'>اکونومی
                        </div>
                        <div
                            className='bg-blue-100 text-blue-500  flex justify-center items-center gap-[4px] py-[2px] px-[8px] h-[24px] border rounded-md'>سیستمی
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-end gap-[64px] px-4 md:flex-row flex-col'>
                    <div className='flex justify-center items-center gap-[24px]'>
                        <div className='flex flex-col gap-[16px] items-center'>
                            <img alt={''} src={''}/>
                            <span>Gulf Air</span>
                        </div>
                        <div className='flex flex-col gap-[16px] items-center'>
                            <span>02:50</span>
                            <span>استانبول(SAW)</span>
                        </div>
                        <div className='flex flex-col gap-[16px] items-center'>
                            <span>19:00</span>
                            <span><img alt={''} src={''}/></span>
                            <span>20kg</span>
                        </div>
                        <div className='flex flex-col gap-[16px] items-center'>
                            <span>21:50</span>
                            <span>دبی(DXB)</span>
                        </div>
                    </div>
                    <div className='flex md:justify-center md:items-end gap-[8px] items-center self-center'>
                        <div>23,333,231 تومان</div>
                        <div>
                            <Button size='lg'>جزئیات بلیط</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default SingleTicket;