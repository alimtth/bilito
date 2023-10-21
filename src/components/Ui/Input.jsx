import React from 'react'
import tickSquareButton from "/src/assets/tick-square-dark-button.svg"


function Input() {
    return (
            <div className='h-fit px-6 gap-2 rounded border border-gray-300 flex justify-between shrink-0 hover:shadow-xl hover:transition-shadow focus:border-blue-400 w-96 ' >
                <img src={tickSquareButton} />
                <input type="text" placeholder='عنوان' className='py-4 focus:outline-none text-right h-full flex-grow'/>
                <img src={tickSquareButton} />
            </div>
    )
}

export default Input

