import React from 'react';
import linkedinSVG from "../../../static/svg/linkedin.svg";

const LinkedInLogo = (props) => {
    return (
        <div style={props.style} className={props.className}>
            <a href='https://www.linkedin.com/in/andr%C3%A1s-felf%C3%B6ldi-731289138/'>
                <img className='logo' alt='LinkedIn' src={linkedinSVG} />
            </a>
        </div>
    );
}
 
export default LinkedInLogo;