import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.splitter = this.splitter.bind(this);
    }

    handleChange(val) {
        this.setState({
            userInput: val
        });
    }

    splitter = (userInput) => {
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];
        arr.forEach(item => {
            return item % 2 === 0 ? evens.push(Number(item)) : odds.push(Number(item))
        });
        this.setState({
            evenArray: evens,
            oddArray: odds
        });
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>

                <input type="text" className="inputLine" placeholder="Enter a list of numbers here" onChange={ (event) => this.handleChange(event.target.value) }/>

                <button className="confirmationButton" onClick={ () => this.splitter(this.state.userInput) }>Split List</button>

                <span className="resultsBox">Even Numbers in List: { JSON.stringify(this.state.evenArray) }</span>

                <span className="resultsBox">Odd Numbers in List: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        );
    }
}