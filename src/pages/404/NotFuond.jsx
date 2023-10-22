import React from 'react';
import Notf from '../../assets/Images/Icons/Component 137.png'
import { ArrowBackIos } from '@mui/icons-material';

function NotFuond() {
    return (
        <div className='flex justify-center flex-col items-center '>
            <img src={Notf} alt="404" className=' w-[708px]'/>
            <button className='mt-[30px] text-blue-650'>برگشت به صفحه اصلی<ArrowBackIos /></button>
        </div>
    );
}

export default NotFuond;