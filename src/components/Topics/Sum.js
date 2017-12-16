import React, { Component } from 'react';

export default class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        };
    }

    handleChangeOne(input){
        this.setState({
            number1: input
        });
    }

    handleChangeTwo(input){
        this.setState({
            number2: input
        });
    }

    sum = (number1, number2) => this.setState({ sum: number1 + number2 });

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="text" className="inputLine" onChange={ (event) => this.handleChangeOne(event.target.value) }/>
                <input type="text" className="inputLine" onChange={ (event) => this.handleChangeTwo(event.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.sum(Number(this.state.number1), Number(this.state.number2)) }>Calculate</button>
                <span className="resultsBox">Sum: { this.state.sum }</span>
            </div>
        );
    }
}