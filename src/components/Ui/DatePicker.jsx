import React from 'react';
import Select from 'react-select';

import 'react-dropdown/style.css';
import './datePicker.css'
function DatePicker(props) {
    const days = [
        {  label: '01', value: 1 },
        { label: '02', value: 2 },
        { label: '03', value: 3 },
    ];
    const month = [
        'one', 'two', 'three'
    ];
    const options = [
        { label: 'گزینه ۱', value: 1 },
        { label: 'گزینه ۲', value: 2 },
        { label: 'گزینه ۳', value: 3 },
    ];

    // const handleChange = (selectedOption) => {
    //     console.log('گزینه انتخاب شده:', selectedOption);
    // };

    return (
        <div className='flex justify-center'>
            <input

            />
            <Select
                className='border-none'
                options={days}
            />
            <Select
                options={days}
            />


        </div>
    );
}

export default DatePicker;