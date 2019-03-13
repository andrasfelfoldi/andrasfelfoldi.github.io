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
import AppDescriptionText from './AppDescriptionText';

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
            <div id={this.props.id} className='container'>
                <div className='flexContainer'>
                    <div className='flexItem'>
                        <FadeInMoveUp id='sudokuTitle'>
                            {AppDescriptionText.title}
                        </FadeInMoveUp>
                        <FadeInMoveUp>
                            {AppDescriptionText.line1}
                        </FadeInMoveUp>
                        <FadeInMoveUp>
                            {AppDescriptionText.line2}
                        </FadeInMoveUp>
                    </div>
                    <div className='flexItem'>
                        <FadeInMoveUp>
                            <img id='sudokuImage' src={lightThemeImage} {...sizeProp}/>
                            <GooglePlayBadge />
                        </FadeInMoveUp>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SudokuShowcase;