import React from 'react';
import './ui.css'
function ContactUsButton({children,icon}) {
    return (
        <button className='contact-us-button'>
            <span><img src={icon}/></span>
            <span className='text-white text-xl font-bold'>{children}</span>
        </button>
    );
}

export default ContactUsButton;