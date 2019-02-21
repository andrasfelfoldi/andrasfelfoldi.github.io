import React from "react"
import "../../static/css/reset.css";
import "../../static/css/index.css";
import Main from "../containers/Main";

export default () => (
    <div style={{color: '#cfd8dc'}}>
        <Main />
        <div style={scrollButtonContainerStyle}>
            <i class="material-icons">
                keyboard_arrow_down
            </i>
        </div>
    </div>
)

const scrollButtonContainerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: '1em'
}
