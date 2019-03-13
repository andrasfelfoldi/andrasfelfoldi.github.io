import React from 'react';

class Borders extends React.Component {

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
            <React.Fragment>
                <div id={'topBorder'} style={{position: 'fixed', top: 0, left: 0, width: '100%', height: 10, backgroundColor: '#888888'}}/>
                <div id={'bottomBorder'} style={{position: 'fixed', bottom: 0, left: 0, width: '100%', height: 10, backgroundColor: '#888888'}}/>
                <div id={'leftBorder'} style={{position: 'fixed', bottom: 0, left: 0, width: 10, height: this.state.isMobileDevice ? '200%' : '100%', backgroundColor: '#888888'}}/>
                <div id={'rightBorder'} style={{position: 'fixed', bottom: 0, right: 0, width: 10, height: this.state.isMobileDevice ? '200%' : '100%', backgroundColor: '#888888'}}/>
            </React.Fragment>
        );
    }
}
 
export default Borders;