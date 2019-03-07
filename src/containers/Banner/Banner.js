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
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        if(!this.isMobileDevice()){
            window.addEventListener('resize', this.updateWindowDimensions);
            this.setState({isMobileDevice = false});
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
            <div id={this.props.id} className='fadeInMoveUpBanner'
                style={{...this.style, height: this.state.height, overflow: 'hidden'}}>
                <BubblingDevTexts isMobileDevice={this.state.isMobileDevice} />
                <div style={{ fontSize: '4em'}} >
                    Welcome!
                </div>
            </div>
        );
    }
}


 
export default Banner;