import React from 'react';
import getRandomIntBelow from "../../utils/Random";

class RandomBubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ width: 0, height: 0, className: ''});

        // this.lastTop = -1000;
        // this.lastLeft = -1000;

        this.lastTop = this.getRandomTop();
        this.lastLeft = this.getRandomLeft();
    }

    classes = ['bubbleIn', 'bubbleOut'];
    current = 1;

    componentDidMount() {
        // this.updateWindowDimensions();
        // if(!this.isMobileDevice()){
        //     window.addEventListener('resize', this.updateWindowDimensions);
        // }

        this.lastTop = this.getRandomTop();
        this.lastLeft = this.getRandomLeft();

        setTimeout(() => {
            this.infinitelyToggleClass();
        }, 1000 + getRandomIntBelow(5000));
    }
    
    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.updateWindowDimensions);
    // }
    
    // updateWindowDimensions = () => {
    //     this.setState({ height: window.innerHeight, width: window.innerWidth });
    // }

    isMobileDevice = () => {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    getRandomTop = () => {
        if(window)
        return getRandomIntBelow(window.innerHeight);
    }

    getRandomLeft = () => {
        if(window)
        return getRandomIntBelow(window.innerWidth);
    }

    infinitelyToggleClass = () => {

        this.current = (this.current >= this.classes.length - 1) ? 0 : (this.current + 1);

        this.lastTop = this.current === 0 ? this.getRandomTop() : this.lastTop;
        this.lastLeft = this.current === 0 ? this.getRandomLeft() : this.lastLeft;

        this.setState({className: this.classes[this.current]});
        setTimeout(() => {
            this.infinitelyToggleClass();
        }, 1000 + getRandomIntBelow(3000));

    }

    render() { 
        return (
            <div style={{ position: 'absolute', top: this.lastTop, left: this.lastLeft }} className={this.state.className}>
                {this.props.children}
            </div>
        );
    }
}
 
export default RandomBubble;