import React, { Component } from 'react';
import Banner from './Banner/Banner';
import SectionContainer from './SectionContainer';
import SudokuShowcase from '../components/SudokuShowcase';

class Main extends Component {

    state = {isMobileDevice: true};

    componentDidMount() {
        if(!this.isMobileDevice()){
            this.setState({isMobileDevice: false});
        }
    }

    isMobileDevice = () => {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };
    
    render() { 
        return (
            <div >
                <Banner id={'banner'} />
                <SectionContainer id={'section ' + 1} style={{backgroundColor: '#222222'}}>
                    <SudokuShowcase />
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
                <div id={'topBorder'} style={{position: 'fixed', top: 0, left: 0, width: '100%', height: 10, backgroundColor: '#888888'}}/>
                <div id={'bottomBorder'} style={{position: 'fixed', bottom: 0, left: 0, width: '100%', height: 10, backgroundColor: '#888888'}}/>
                <div id={'leftBorder'} style={{position: 'fixed', bottom: 0, left: 0, width: 10, height: this.state.isMobileDevice ? '200%' : '100%', backgroundColor: '#888888'}}/>
                <div id={'rightBorder'} style={{position: 'fixed', bottom: 0, right: 0, width: 10, height: this.state.isMobileDevice ? '200%' : '100%', backgroundColor: '#888888'}}/>
            </div>
        );
    }
}
 
export default Main;