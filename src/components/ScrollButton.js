import React from 'react';

const ScrollButton = () => {
    return (
        <div style={containerStyle} onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <i className="material-icons">
                keyboard_arrow_down
            </i>
        </div>
    );
}
 
export default ScrollButton;


const containerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: '1em',
    cursor: 'pointer'
}