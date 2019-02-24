import React from 'react';
import { connect } from "react-redux";
import { changeScrollPosition } from "../actions/ScrollActions";
import { debounce } from "lodash";

class ScrollButton extends React.Component{

    state={rotate180: false, rotateback: false}

    scrollSectionIds = [
        'banner',
        'section 1',
        'section 2',
        'section 3',
        'section 4',
    ]
    
    nextSection = null;

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    handleScroll = debounce(() => {
        let nextSection = null;

        this.scrollSectionIds.forEach((sectionId, i) => {
            let section = document.getElementById(sectionId);
            if(nextSection === null && section.getBoundingClientRect().bottom > window.innerHeight){ // not to override first selected section
                if(i < this.scrollSectionIds.length){
                    nextSection = section;
                }
            }
        })

        if(nextSection === null){
            nextSection = document.getElementById(this.scrollSectionIds[0]); // scrolling to top from last section
            this.setState({rotate180: true, rotateback: false});
        }else if(this.state.rotate180){
            this.setState({rotate180: false, rotateback: true});
        }

        this.nextSection = nextSection;
    }, 100);

    onClick = () => {
        if(this.nextSection === null){
            this.nextSection = document.getElementById(this.scrollSectionIds[1]);
        }
        this.nextSection.scrollIntoView({behavior: 'smooth'});
    }

    render() {

        return (
            <div style={containerStyle}>
                <div className={this.state.rotate180
                        ? 'rotate180'
                        : this.state.rotateback ? 'rotateFrom180To0' : null}>
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