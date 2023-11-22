import React, {memo, useState} from 'react';
import user from '@/assets/Images/stewardess.jpg'
import {Link} from "react-router-dom";
function BubbleTip({className}) {
    const [isShow , setIsShow]= useState(true)
    return (
        <>
             <div className={`cloud ${className && isShow === true ? 'animated' : ''}`}>
            <div className="flamelab-cw-msg-box">
                <div className={'flex'}>
                    <span className={'text-blue-500'}>فکر کنم بتونم کمکت کنم همراه من باش!!!</span>
                    <img className={'w-1/2'} src={user}/>
                </div>

                <div className="flex gap-8">
                    <Link onClick={()=>setIsShow(false)}  to={'/stepshop'} className={'transform hover:scale-105 text-blue-500'}>
                        بزن بریم
                    </Link>
                    <div onClick={()=>setIsShow(false)} className={'transform hover:scale-105 text-gray-20'}>نه اوکیم</div>
                </div>
            </div>
        </div>



        </>
            );
}

export default memo(BubbleTip);