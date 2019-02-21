import React, { Component } from 'react';

class Banner extends Component {
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
            <div style={{...style, fontSize: '4rem', marginHorizontal: '10px', width: this.state.width, height: this.state.height}}>
                Lorem ipsum
            </div>
        );
    }
}

const style = { display: 'flex', justifyContent: 'center', alignItems: 'center'}

 
export default Banner;