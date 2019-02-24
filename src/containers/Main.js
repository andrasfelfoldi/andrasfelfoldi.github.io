import React, { Component } from 'react';
import Banner from './Banner';
import SectionContainer from './SectionContainer';

class Main extends Component {
    
    render() { 
        return (
            <div >
                <Banner id={'banner'} />
                <SectionContainer id={'section ' + 1} style={{backgroundColor: '#222222'}}>
                    Section 1
                </SectionContainer>
                <SectionContainer id={'section ' + 2} style={{backgroundColor: '#333333'}}>
                    Section 2
                </SectionContainer>
                <SectionContainer id={'section ' + 3} style={{backgroundColor: '#444444'}}>
                    Section 3
                </SectionContainer>
                <SectionContainer id={'section ' + 4} style={{backgroundColor: '#555555'}}>
                    Section 4
                </SectionContainer>
            </div>
        );
    }
}
 
export default Main;