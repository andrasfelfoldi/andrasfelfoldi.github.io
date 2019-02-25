import React, { Component } from 'react';
import isMobileDevice from "../utils/isMobileDevice";

class SectionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
    componentDidMount() {
        this.updateWindowDimensions();
        if(!isMobileDevice()){
            window.addEventListener('resize', this.updateWindowDimensions);
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ height: window.innerHeight });
    }

    render() { 
        return (
            <div id={this.props.id} style={{...style, ...this.props.style, width: '100%', height: this.state.height}}>
                {this.props.children}
            </div>
        );
    }
}

const style = { display: 'flex', justifyContent: 'center', alignItems: 'center'}
 
export default SectionContainer;