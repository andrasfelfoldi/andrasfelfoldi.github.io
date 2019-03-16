import React from 'react';
import LinkedInLogo from "../Logos/LinkedInLogo";
import EmailLogo from "../Logos/EmailLogo";
import GitHubLogo from '../Logos/GitHubLogo';

const ContactMe = (props) => {
    return (
        <div className='contact'>
            <div id='contactMeText'>
                Contact Me:
            </div>
            {/* <hr /> */}
            <LinkedInLogo className="logoComp"/>
            <EmailLogo className="logoComp"/>
            <GitHubLogo className="logoComp"/>
        </div>
    );
}
 
export default ContactMe;