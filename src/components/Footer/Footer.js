import React from 'react';
import FadeInMoveUp from "../../containers/Animation/FadeInMoveUp"
import './style.css'
import Legal from './Legal';
import ContactMe from './ContactMe';

class Footer extends React.Component {

    render() { 

        return (
            <div id='footer'>
                <ContactMe />
                <hr />
                <Legal />
            </div>
        );
    }
}
 
export default Footer;