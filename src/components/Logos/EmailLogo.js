import React from 'react';
import emailSVG from "../../../static/svg/email.svg";

const EmailLogo = (props) => {
    return (
        <div style={props.style} className={props.className}>
            <a href='mailto:andras.felfoldi@gmail.com'>
                <img className='logo' alt='andras.felfoldi@gmail.com' src={emailSVG} />
            </a>
        </div>
    );
}
 
export default EmailLogo;