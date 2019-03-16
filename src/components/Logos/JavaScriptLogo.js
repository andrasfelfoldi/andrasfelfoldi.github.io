import React from 'react';
import javascriptSVG from "../../../static/svg/javascript.svg";

const JavaScriptLogo = (props) => {
    return (
        <div style={props.style} >
            <a href='https://www.javascript.com/'>
                <img className='logo' alt='JavaScript' src={javascriptSVG} />
            </a>
        </div>
    );
}
 
export default JavaScriptLogo;