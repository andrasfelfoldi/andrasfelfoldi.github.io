import React from 'react';
import lightThemeImage from "../../static/img/light-theme.png";

class SudokuShowcase extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = ({height: 0, width: 0, className: ''});
      }


    componentDidMount = () => {
        this.setState({height: window.innerHeight / 2, width: window.innerWidth / 2})
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    handleScroll = () => {

        let node = this.ref.current;

        if(node.getBoundingClientRect().top < window.innerHeight * 0.75){
            this.setState({className: 'fadeInMoveUp'});
            window.removeEventListener('scroll', this.handleScroll);
        }

    };
    

    render() { 

        let sizeProp = {}
        if(this.state.width <= this.state.height){
            sizeProp['width'] = this.state.width / 2;
        }else{
            sizeProp['height'] = this.state.height;
        }

        return (
            <div ref={this.ref} style={{opacity: 0}} className={this.state.className}>
                <img src={lightThemeImage} {...sizeProp}/>
            </div>
        );
    }
}
 
export default SudokuShowcase;