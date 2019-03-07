import React, { Component } from 'react';
import RandomBubble from "../containers/Animation/RandomBubble";

class BubblingDevTexts extends Component {
    constructor(props) {
        super(props);

        let amount = this.props.isMobileDevice ? 5 : 20;

        this.devChars = [];
        for(let i = 0; i < amount; i++){
            this.devChars.push(<RandomBubble id={'</>' + i}>{'</>'}</RandomBubble>);
        }

        for(let i = 0; i < amount; i++){
            this.devChars.push(<RandomBubble id={'{ }' + i}>{'{ }'}</RandomBubble>);
        }

        for(let i = 0; i < amount; i++){
            this.devChars.push(<RandomBubble id={'[ ]' + i}>{'[ ]'}</RandomBubble>);
        }

    }
      
    render() { 
        return ( 
            <div  className='' style={{fontFamily: 'Staatliches, cursive'}} >
                {this.devChars}
            </div>
        );
    }
}


 
export default BubblingDevTexts;