import React from 'react';
import expoSVG from "../../../static/svg/expo.svg";

const ExpoLogo = (props) => {
    return (
        <div style={props.style} >
            <a href='https://expo.io/'>
                <img className='logo' alt='Expo' src={expoSVG} />
            </a>
        </div>
    );
}
 
export default ExpoLogo;