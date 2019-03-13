import React, { Component } from 'react';

class SectionContainer extends Component {
    constructor(props) {
        super(props);
        // this.state = { width: 0, height: 0 };
        // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
    // componentDidMount() {
    //     this.updateWindowDimensions();
    //     if(!this.isMobileDevice()){
    //         window.addEventListener('resize', this.updateWindowDimensions);
    //     }
    // }
    
    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.updateWindowDimensions);
    // }
    
    // updateWindowDimensions() {
    //     this.setState({ height: window.innerHeight });
    // }

    // isMobileDevice = () => {
    //     return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    // };

    render() { 
        return (
            // <div id={this.props.id} style={{...style, ...this.props.style, width: '100%', height: this.state.height}}>
            <div id={this.props.id} style={{...style, ...this.props.style, width: '100vw', height: '100vh'}}>
                {this.props.children}
            </div>
        );
    }
}

const style = { display: 'flex', justifyContent: 'center', alignItems: 'center'}
 
export default SectionContainer;