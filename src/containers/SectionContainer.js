import React, { Component } from 'react';

class SectionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() { 
        return (
            <div style={{...style, ...this.props.style, width: this.state.width, height: this.state.height}}>
                {this.props.children}
            </div>
        );
    }
}

const style = { display: 'flex', justifyContent: 'center', alignItems: 'center'}
 
export default SectionContainer;