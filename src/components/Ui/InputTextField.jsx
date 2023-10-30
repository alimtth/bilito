import React, { Children } from 'react';
import './ui.css'
const sizes = {
    sm: "flex py-4 text-sm px-1 ",
    md: "flex py-4 text-sm px-1 ",
    lg: "flex py-4 text-sm px-1 ",
    xl: "flex py-4 text-sm px-1 ",
};
function InputTextField({children , placeholder, style, className, onChange, type, register, value,size}) {
    return (

        <div>
            <div className="material-textfield">
                <input onChange={onChange} value={value} className={`input-text-field ${sizes[size]} ${className}`} type={type} {...register}/>

                    <label className='label'>{children}</label>
            </div>
        </div>

    );
}

export default InputTextField;