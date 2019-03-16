import React from 'react';
import githubSVG from "../../../static/svg/github.svg";

const GitHubLogo = (props) => {
    return (
        <div style={props.style} className={props.className}>
            <a href='https://github.com/andrasfelfoldi'>
                <img className='logo' alt='GitHub' src={githubSVG} />
            </a>
        </div>
    );
}
 
export default GitHubLogo;