import React from 'react';
import './ui.css'
function ContactUsButton({children,icon}) {
    return (
        <button className='contact-us-button'>
            <img src={icon}/>
            <span className='text-white text-xl font-bold'>{children}</span>
        </button>
    );
}

export default ContactUsButton;