import React, { Component } from 'react';
import BubblingDevTexts from '../../components/BubblingDevTexts';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, isMobileDevice: true };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }

    style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Staatliches, cursive',
        width: '100%',
        position: 'absolute', top: 0, left: 0
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        if(!this.isMobileDevice()){
            window.addEventListener('resize', this.updateWindowDimensions);
            this.setState({isMobileDevice: false});
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ height: window.innerHeight });
    }

    isMobileDevice = () => {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    render() { 
        return (
            <div>
                <div id={this.props.id} 
                    style={{...this.style, height: this.state.height, width: '100%', overflow: 'hidden'}}>
                    <BubblingDevTexts isMobileDevice={this.state.isMobileDevice} />
                    <div style={{width: '100%', height: '50%', position: 'absolute', top: 0, left: 0, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                        <div style={{ fontSize: '15vw' }} className='fadeInMoveUpBanner' >
                            Welcome!
                        </div>
                    </div>
                </div>
                <div id='bannerHrContainer'>
                    <hr id='bannerHr'/>
                </div>
            </div>
        );
    }
}


 
export default Banner;