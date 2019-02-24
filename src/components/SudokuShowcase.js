import React from 'react';
import lightThemeImage from "../../static/img/light-theme.png";

class SudokuShowcase extends React.Component {

    state = ({height: 0});

    componentDidMount(){
        this.setState({height: window.innerHeight / 2})
    }
    

    render() { 
        return (
            <div>
                <img src={lightThemeImage} height={this.state.height}/>
            </div>
        );
    }
}
 
export default SudokuShowcase;