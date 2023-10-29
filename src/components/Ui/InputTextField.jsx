import React, { Children } from 'react';
import './ui.css'
function InputTextField({children , placeholder, style, className, onChange, type, register, value}) {
    return (

        <div>
            <div className="material-textfield">
                <input className='input-text-field' type={type} onChange={onChange} {...register}/>

                <input onChange={onChange} value={value} className='input-text-field' type={type} />
                    <label className='label'>{children}</label>
            </div>
        </div>

    );
}

export default InputTextField;