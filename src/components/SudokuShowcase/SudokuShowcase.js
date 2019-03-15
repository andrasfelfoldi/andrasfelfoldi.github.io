import React from 'react';
import lightThemeImage from "../../../static/img/light-theme.png";
import FadeInMoveUp from "../../containers/Animation/FadeInMoveUp"
import GooglePlayBadge from './GooglePlayBadge';
import './style.css'
import AppDescriptionText from './AppDescriptionText';

class SudokuShowcase extends React.Component {

    render() { 

        return (
            <div id={this.props.id} className='container'>
                <div className='flexContainer'>
                    <div className='flexItem'>
                        <FadeInMoveUp id='sudokuTitle'>
                            {AppDescriptionText.title}
                        </FadeInMoveUp>
                        <FadeInMoveUp id='firstSection'>
                            {AppDescriptionText.line1}
                        </FadeInMoveUp>
                        <FadeInMoveUp>
                            {AppDescriptionText.line2}
                        </FadeInMoveUp>
                        <FadeInMoveUp>
                            <GooglePlayBadge />
                        </FadeInMoveUp>
                    </div>
                    <div className='flexItem'>
                        <FadeInMoveUp>
                            <img id='sudokuImage' src={lightThemeImage}/>
                        </FadeInMoveUp>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SudokuShowcase;