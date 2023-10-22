import React from 'react';
import {Headphones} from "@mui/icons-material";
import CardPos from '../../assets/Images/card-pos.png'
import GlobalSearch from '../../assets/Images/global-search.png'
import Monitor from '../../assets/Images/monitor.png'
import HeadPhone from '../../assets/Images/headphone.png'

function Advantages(props) {
    return (
        <div className='flex justify-around mt-24 py-12 bg-blue-400'>
            <div className='flex flex-col justify-between items-center gap-[32px]'>
                <div className='inline-flex justify-start items-center bg-white border border-blue-300 rounded-2xl p-[19px]'>
                <img alt={''} src={Monitor}/>
                </div>
                <span className='text-xl font-bold leading-7'>دسترسی آسان و راحت</span>
            </div>
            <div className='flex flex-col justify-between items-center gap-[32px]'>
                <div className='inline-flex justify-start items-center bg-white border border-blue-300 rounded-2xl p-[19px]'>
                <img alt={''} src={HeadPhone}/>
                </div>
                <span className='text-xl font-bold leading-7'>پاسخگویی 24 ساعته</span>
            </div>
            <div className='flex flex-col justify-between items-center gap-[32px]'>
                <div className='inline-flex justify-start items-center bg-white border border-blue-300 rounded-2xl p-[19px]'>
                <img alt={''} src={GlobalSearch}/>
                </div>
                <span className='text-xl font-bold leading-7'>خدمات آنلاین</span>
            </div>
            <div className='flex flex-col justify-between items-center gap-[32px]'>
                <div className='inline-flex justify-start items-center bg-white border border-blue-300 rounded-2xl p-[19px]'>
                <img alt={''} src={CardPos}/>
                </div>
                <span className='text-xl font-bold leading-7'>کمترین نرخ خرید بلیط</span>
            </div>
        </div>
    );
}

export default Advantages;