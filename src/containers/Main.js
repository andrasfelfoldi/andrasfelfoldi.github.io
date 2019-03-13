import React, { Component } from 'react';
import Banner from './Banner/Banner';
import SectionContainer from './SectionContainer';
import SudokuShowcase from '../components/SudokuShowcase/SudokuShowcase';
import FadeInMoveUp from './Animation/FadeInMoveUp';
import Borders from '../components/Borders';

class Main extends Component {
    
    render() { 
        return (
            <div >
                <SectionContainer id={'section ' + 0} style={{backgroundColor: '#161616'}}>
                    <Banner id={'banner'} />
                </SectionContainer>

                <SudokuShowcase id={'section ' + 1}/>

                <SectionContainer id={'section ' + 2} style={{backgroundColor: '#333333'}}>
                    <FadeInMoveUp>
                        Section 2
                    </FadeInMoveUp>
                </SectionContainer>

                <SectionContainer id={'section ' + 3} style={{backgroundColor: '#444444'}}>
                    <FadeInMoveUp>
                        Section 3
                    </FadeInMoveUp>
                </SectionContainer>

                <SectionContainer id={'section ' + 4} style={{backgroundColor: '#555555'}}>
                    <FadeInMoveUp>
                        Google Play and the Google Play logo are trademarks of Google LLC.
                    </FadeInMoveUp>
                </SectionContainer>

                <Borders />
            </div>
        );
    }
}
 
export default Main;