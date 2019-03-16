import React from 'react';
import reduxSVG from "../../../static/svg/redux.svg";

const ReduxLogo = (props) => {
    return (
        <div style={props.style} className={props.className}>
            <a href='https://redux.js.org/'>
                <img className='logo' alt='Redux' src={reduxSVG} />
            </a>
        </div>
    );
}
 
export default ReduxLogo;