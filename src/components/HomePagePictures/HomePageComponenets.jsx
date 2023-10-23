import React from 'react'
import shiraz from '../../assets/Images/Icons/HomePageShiraz.jpg'
import dubai from '../../assets/Images/Icons/HomePageDubai.jpg'
import turkey from '../../assets/Images/Icons/HomePageTurkey.jpg'
import kish from '../../assets/Images/Icons/HomePageKish.jpg'
function HomePageComponenets() {
    return (
        <div className='flex justify-center gap-6'>
            <div className='rounded-lg overflow-hidden relative flex justify-start items-end  '>
                <img src={kish} className='' />
                <p className='absolute pb-11 pr-4 mr-2 mb-2 text-white text-xl '>بهترین فصل شنا</p>
                <button className='h-auto w-auto mr-6 mb-2 border-2 p-2 absolute border-solid border-white rounded-lg text-white text-sm'>خرید بلیط پرواز های کیش</button>
                
            </div>
            <div className='relative rounded-lg overflow-hidden flex justify-start items-end'>
                <img src={turkey} className=' ' />
                <p className='absolute pb-11 pr-4 mr-2 mb-2 text-white text-xl '>سفر به ترکیه</p>
                <button className='h-auto w-auto mr-6 mb-2 border-2 p-2 absolute border-solid border-white rounded-lg text-white text-sm'>خرید بلیط پرواز های ترکیه</button>

            </div>
            <div className='flex flex-col gap-6 '>
                <div className='relative rounded-lg overflow-hidden flex justify-start items-end'>
                    <img src={dubai} className='' />
                    <p className='absolute pb-11 pr-4 mr-2 mb-2 text-white text-xl '>شگفتی در صحرا</p>
                    <button className='h-auto w-auto mr-6 mb-2 border-2 p-2 absolute border-solid border-white rounded-lg text-white text-sm'>خرید بلیط پرواز های دبی</button>

                </div>
                <div className='relative rounded-lg overflow-hidden flex justify-start items-end'>
                    <img src={shiraz} className='' />
                    <p className='absolute pb-11 pr-4 mr-2 mb-2 text-white text-xl '>دنیایی از تاریخ و هنر</p>
                    <button className='h-auto w-auto mr-6 mb-2 border-2 p-2 absolute border-solid border-white rounded-lg text-white text-sm'>خرید بلیط پرواز های شیراز</button>

                </div>
            </div>
        </div>
    )
}

export default HomePageComponenets