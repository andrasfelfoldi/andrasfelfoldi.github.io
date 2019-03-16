import React from 'react';
import reactSVG from "../../../static/svg/react.svg";

const ReactLogo = (props) => {
    return (
        <div style={props.style} className={props.className}>
            <a href='https://reactjs.org/'>
                <img className='logo' alt='React' src={reactSVG} />
            </a>
        </div>
    );
}
 
export default ReactLogo;