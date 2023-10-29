import React, { Children } from 'react';
import './ui.css'
function InputTextField({children , placeholder, style, className, onChange, type, register}) {
    return (

        <div>
            <div className="material-textfield">
                <input className='input-text-field' type={type} onChange={onChange} {...register}/>
                    <label className='label'>{children}</label>
            </div>
        </div>

    );
}

export default InputTextField;