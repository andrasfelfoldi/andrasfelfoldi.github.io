import React from 'react';

class FadeInMoveUp extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = ({className: ''});
    }


    componentDidMount = () => {
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
        return (
            <div ref={this.ref} style={{opacity: 0}} className={this.state.className} id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}
 
export default FadeInMoveUp;