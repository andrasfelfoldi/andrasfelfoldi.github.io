import React, { Component } from 'react';
import RandomBubble from "../containers/Animation/RandomBubble";

class BubblingDevTexts extends Component {
    constructor(props) {
        super(props);

        let amount = 5;

        this.devChars = [];
        for(let i = 0; i < amount; i++){
            this.devChars.push(<RandomBubble key={'</>' + i}>{'</>'}</RandomBubble>);
        }

        for(let i = 0; i < amount; i++){
            this.devChars.push(<RandomBubble key={'{ }' + i}>{'{ }'}</RandomBubble>);
        }

        for(let i = 0; i < amount; i++){
            this.devChars.push(<RandomBubble key={'[ ]' + i}>{'[ ]'}</RandomBubble>);
        }

    }
      
    render() { 
        return ( 
            <div style={{fontFamily: 'Staatliches, cursive'}} >
                {this.devChars}
            </div>
        );
    }
}


 
export default BubblingDevTexts;