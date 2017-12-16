import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(input){
        this.setState({
            userInput: input
        });
    }

    palindromeCheck(input){
        let palindrome = '';
        if(input === input.split('').reverse().join('')) {
            palindrome = 'true'
        } else {
            palindrome = 'false'
        }
        this.setState({
            palindrome: palindrome
        });
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input type="text" className="inputLine" onChange={ (event) => this.handleChange(event.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.palindromeCheck(this.state.userInput) }>Check</button>
                <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
            </div>
        );
    }
}