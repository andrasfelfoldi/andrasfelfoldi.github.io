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
                {/* {this.devChars} */}
                <RandomBubble key={0}>{'React'}</RandomBubble>
                <RandomBubble key={1}>{'Redux'}</RandomBubble>
                <RandomBubble key={2}>{'React Native'}</RandomBubble>
                <RandomBubble key={3}>{'Expo'}</RandomBubble>
                <RandomBubble key={4}>{'Babel'}</RandomBubble>
                <RandomBubble key={5}>{'Webpack'}</RandomBubble>
                <RandomBubble key={6}>{'Java'}</RandomBubble>
                <RandomBubble key={7}>{'JavaScript'}</RandomBubble>
                <RandomBubble key={8}>{'UI5'}</RandomBubble>
                <RandomBubble key={9}>{'ES6'}</RandomBubble>
                <RandomBubble key={10}>{'Spring'}</RandomBubble>
                <RandomBubble key={11}>{'Git'}</RandomBubble>
                <RandomBubble key={12}>{'Docker'}</RandomBubble>
                <RandomBubble key={13}>{'npm'}</RandomBubble>
                <RandomBubble key={14}>{'Maven'}</RandomBubble>
                <RandomBubble key={15}>{'Node.JS'}</RandomBubble>
            </div>
        );
    }
}


 
export default BubblingDevTexts;