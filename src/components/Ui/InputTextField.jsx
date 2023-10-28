import React, { Children } from 'react';
import './ui.css'
function InputTextField({children , placeholder, style, className}) {
    return (

        <div>
            <div className="material-textfield">
                <input className='input-text-field' type="text" />
                    <label className='label'>{children}</label>
            </div>
        </div>
    );
}

export default InputTextField;