import React from 'react';
import FadeInMoveUp from "../../containers/Animation/FadeInMoveUp"
import './style.css'
import SkillsTexts from './SkillsTexts';

class Skills extends React.Component {

    render() { 

        return (
            <div id={this.props.id} className='container'>
                <div className='flexContainer'>
                    <div className='flexItem'>
                        <FadeInMoveUp id='title'>
                            {SkillsTexts.title}
                        </FadeInMoveUp>
                        <FadeInMoveUp>
                            <div className='section'>
                                {SkillsTexts.mainText}
                            </div>
                        </FadeInMoveUp>

                        <ul>
                            {SkillsTexts.mainTech.map((tech, i) => 
                                <li key={i}>
                                    <FadeInMoveUp>
                                            - {tech}
                                    </FadeInMoveUp>
                                </li>
                            )}
                        </ul>

                    </div>
                    <div className='flexItem'>
                        <FadeInMoveUp id='secondaryTitle'>
                            {/* {SkillsTexts.title} */}
                            Secondary Stack
                        </FadeInMoveUp>

                        <FadeInMoveUp>
                            <div className='section'>
                                {SkillsTexts.secondaryText}
                            </div>
                        </FadeInMoveUp>

                        <ul>
                            {SkillsTexts.secondaryTech.map((tech, i) => 
                                <li key={i}>
                                    <FadeInMoveUp>
                                            - {tech}
                                    </FadeInMoveUp>
                                </li>
                            )}
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}
 
export default Skills;