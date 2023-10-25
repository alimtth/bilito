import React from 'react';
import './ui.css'
function InputTextField(props) {
    return (

        <div>
            <div className="material-textfield">
                <input className='input-text-field' placeholder=" " type="text"/>
                    <label className='label'>عنوان</label>
            </div>
        </div>
    );
}

export default InputTextField;