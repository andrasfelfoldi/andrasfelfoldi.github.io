import React from 'react';
import profilepic from "../../../static/img/profilepic.jpg"
import FadeInMoveUp from "../../containers/Animation/FadeInMoveUp"
import './style.css'
import IntroductionTexts from './IntroductionTexts';

class Introduction extends React.Component {

    render() { 

        return (
            <div id={this.props.id} className='container'>
                <div className='flexContainer'>
                    <div className='flexItem'>
                        <FadeInMoveUp id='title'>
                            {IntroductionTexts.title}
                        </FadeInMoveUp>
                        <FadeInMoveUp>
                            <div className='section'>
                                {IntroductionTexts.line1}
                            </div>
                        </FadeInMoveUp>
                        <FadeInMoveUp>
                            <div className='section'>
                                {IntroductionTexts.line2}
                            </div>
                        </FadeInMoveUp>
                        <FadeInMoveUp>
                            <div className='section'>
                                {IntroductionTexts.line3}
                            </div>
                        </FadeInMoveUp>
                        <FadeInMoveUp>
                            <div className='section'>
                                {IntroductionTexts.line4}
                                <a href='https://github.com/andrasfelfoldi' style={{color: '#cfd8dc'}}>
                                    {IntroductionTexts.line4link}
                                </a>
                                {IntroductionTexts.line4end}
                            </div>
                        </FadeInMoveUp>
                    </div>
                    <div className='flexItem'>
                        <FadeInMoveUp>
                            <img id='profilepic' src={profilepic}/>
                        </FadeInMoveUp>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Introduction;