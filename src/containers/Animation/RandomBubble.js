import React from 'react';
import getRandomIntBelow from "../../utils/Random";

class RandomBubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({className: ''});

        this.lastTop = this.getRandomTop();
        this.lastLeft = this.getRandomLeft();
    }

    classes = ['bubbleIn', 'bubbleOut'];
    current = 1;

    componentDidMount = () => {
        this.infinitelyToggleClass();
    }

    getRandomTop = () => {
        return getRandomIntBelow(window.innerHeight);
    }

    getRandomLeft = () => {
        return getRandomIntBelow(window.innerWidth);
    }

    infinitelyToggleClass = () => {

        this.current = (this.current >= this.classes.length - 1) ? 0 : (this.current + 1);

        this.lastTop = this.current === 0 ? this.getRandomTop() : this.lastTop;
        this.lastLeft = this.current === 0 ? this.getRandomLeft() : this.lastLeft;

        this.setState({className: this.classes[this.current]});
        setTimeout(() => {
            this.infinitelyToggleClass();
        }, 1000 + getRandomIntBelow(5000));

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