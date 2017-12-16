import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray: ["Moosen", "Boxen", "Say Eight", "Big Yellow One", "Gentle Ben"],
            userInput: '',
            filteredArray: []
        };
    }

    handleChange(input){
        this.setState({
            userInput: input
        });
    }

    filterStrings(input){
        let arr = this.state.unfilteredArray;
        let filteredArray = arr.filter(str => str.includes(input));
        this.setState({
            filteredArray: filteredArray
        });
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
                <span className="puzzleText">{ JSON.stringify(this.state.unfilteredArray) }</span>
                <input type="text" className="inputLine" onChange={ (event) => this.handleChange(event.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.filterStrings(this.state.userInput) }>Filter Strings</button>
                <span className="resultsBox filterStringRB">{ JSON.stringify(this.state.filteredArray) }</span>
            </div>
        );
    }
}