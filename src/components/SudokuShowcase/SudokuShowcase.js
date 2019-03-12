import React from 'react';
import lightThemeImage from "../../../static/img/light-theme.png";
import FadeInMoveUp from "../../containers/Animation/FadeInMoveUp"
import GooglePlayBadge from './GooglePlayBadge';
import './style.css'
import reactSVG from "../../../static/svg/react.svg";
import reduxSVG from "../../../static/svg/redux.svg";
import expoSVG from "../../../static/svg/expo.svg";
import ReactLogo from './ReactLogo';
import ReduxLogo from './ReduxLogo';
import ExpoLogo from './ExpoLogo';

class SudokuShowcase extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = ({height: 0, width: 0});
      }


    componentDidMount = () => {
        this.setState({height: window.innerHeight / 2, width: window.innerWidth / 2})
    }

    render() { 

        let sizeProp = {}
        if(this.state.width <= this.state.height){
            sizeProp['width'] = this.state.width / 2;
        }else{
            sizeProp['height'] = this.state.height;
        }

        return (
            <div className='flexContainer'>
                <div className='flexItem'>
                    <FadeInMoveUp>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </FadeInMoveUp>
                </div>
                <div className='flexItem'>
                    <FadeInMoveUp>
                        <img id='sudokuImage' src={lightThemeImage} {...sizeProp}/>
                        <GooglePlayBadge />
                        <ReactLogo />
                        <ReduxLogo />
                        <ExpoLogo />
                    </FadeInMoveUp>
                </div>
            </div>
        );
    }
}

// const styles = {
//     flexContainer: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         alignItems: 'center',
//         justifyContent: 'center',
//         margin: 10
//     },

//     flexItem: {
//         width: '100%',
//         alignSelf: 'flex-start',
//         textAlign: 'justify',
//         margin: 10
//     },
// }
 
export default SudokuShowcase;