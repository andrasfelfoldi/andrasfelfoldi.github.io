import React, { Component } from 'react';
import Banner from './Banner/Banner';
import SectionContainer from './SectionContainer';
import SudokuShowcase from '../components/SudokuShowcase/SudokuShowcase';
import FadeInMoveUp from './Animation/FadeInMoveUp';
import Borders from '../components/Borders';
import Introduction from '../components/Introduction/Introduction';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';

class Main extends Component {
    
    render() { 
        return (
            <div >
                <SectionContainer id={'section ' + 0}>
                {/* <SectionContainer id={'section ' + 0} style={{backgroundColor: '#161616'}}> */}
                    <Banner id={'banner'} />
                </SectionContainer>

                {/* <SectionContainer id={'section ' + 1}>
                    <FadeInMoveUp>
                        Section 2
                    </FadeInMoveUp>
                </SectionContainer> */}

                <Introduction id={'section ' + 1}/>

                <Skills id={'section ' + 2}/>

                <SudokuShowcase id={'section ' + 3}/>

                <Footer id={'section ' + 4}/>

                <Borders />
            </div>
        );
    }
}
 
export default Main;