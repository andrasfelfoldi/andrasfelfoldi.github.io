import React from 'react';
import { connect } from "react-redux";
import { changeScrollPosition } from "../actions/ScrollActions";
import { debounce } from "lodash";

class ScrollButton extends React.Component{

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    handleScroll = debounce(() => {
        let position = Math.floor(window.scrollY / window.innerHeight);
        this.props.changeScrollPosition(position);
    }, 100);

    onClick = () => {

        let nextPosition;

        if(this.props.scrollPosition === this.props.maxPosition){
            nextPosition = 0;
        }else{
            nextPosition = this.props.scrollPosition + 1;
        }

        window.scrollTo({ top: window.innerHeight * nextPosition, behavior: 'smooth' })
        this.props.changeScrollPosition(nextPosition);
    }

    render() {

        return (
            <div style={containerStyle}>
                <div className={this.props.scrollPosition === this.props.maxPosition
                        ? 'rotate180'
                        : this.props.scrollPosition < this.props.maxPosition ? 'rotateFrom180To0' : null}>
                    <i className="material-icons" style={iconStyle} onClick={this.onClick} >
                        keyboard_arrow_down
                    </i>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        scrollPosition: state.scroll.position,
        maxPosition: state.scroll.maxPosition,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeScrollPosition: (position) => dispatch(changeScrollPosition(position)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollButton);


const containerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: '1em',
}

const iconStyle = {
    cursor: 'pointer',
    userSelect: 'none'
}