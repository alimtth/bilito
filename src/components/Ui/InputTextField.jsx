import React, { Children } from 'react';
import './ui.css'
const sizes = {
    sm: "flex py-4 text-sm px-1 ",
    md: "flex py-4 text-sm px-1 ",
    lg: "flex py-4 text-sm px-1 ",
    xl: "flex py-4 text-sm px-1 ",
    ssl: "flex py-3 text-sm px-3 ",
    sll: "flex py-4 text-sm px-6",
    slx: "flex py-4 text-sm px-36",
    xsl: "flex py-3 text-sm pl-32 "
};
function InputTextField({children , placeholder, style, className, onChange, type, register, value,size, disabled}) {
    return (

        <div>
            <div className="material-textfield">
                <input onChange={onChange} value={value} className={`input-text-field ${sizes[size]} ${className}`} type={type} {...register} disabled={disabled}/>

                    <label className='label px'>{children}</label>
            </div>
        </div>

    );
}

export default InputTextField;