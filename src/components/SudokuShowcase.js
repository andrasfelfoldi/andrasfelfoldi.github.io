import React from 'react';
import lightThemeImage from "../../static/img/light-theme.png";

class SudokuShowcase extends React.Component {

    state = ({height: 0, width: 0});

    componentDidMount(){
        this.setState({height: window.innerHeight / 2, width: window.innerWidth / 2})
    }
    

    render() { 

        let sizeProp = {}
        if(this.state.width <= this.state.height){
            sizeProp['width'] = this.state.width / 2;
        }else{
            sizeProp['height'] = this.state.height;
        }

        return (
            <div>
                <img src={lightThemeImage} {...sizeProp}/>
            </div>
        );
    }
}
 
export default SudokuShowcase;