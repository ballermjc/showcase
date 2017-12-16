import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: "Harry James Potter",
                    bigThree: true,
                    lightningScar: true,
                    friends: ["Hermione", "Ron"],
                    parentsDeceased: true,
                    mortalEnemy: "He Who Must Not Be Named"
                },
                {
                    name: "Ronald Bilius Weasley",
                    bigThree: true,
                    hairColor: "Red",
                    numberOfSiblings: 6,
                    reasonForLikingHermione: "Nice Skin"
                },
                {
                    name: "Hermione Jean Granger",
                    bigThree: true,
                    nickname: "Insufferable Know-It-All",
                    favoriteCharm: "Confundus",
                    lastInteractionWithParents: "Obliviated Them"
                },
                {
                    name: "Albus Brian Percival Wulfric Dumbledore",
                    brother: "Aberforth",
                    eyeColor: "Blue",
                    numberOfUsesForDragonsBloodDiscovered: 12,
                    wand: "Elder Wand"
                },
                {
                    name: "Tom Marvolo Riddle",
                    aka: "Lord Voldemort",
                    friends: "His seven other pieces of his soul",
                    pet: "Nagini, the snake",
                    nostrils: "Slits",
                    hobbies: "Muggle-cide",
                    wand: "Elder Wand"
                }
            ],
            userInput: '',
            filteredArray: []
        };
    }

    handleChange(input){
        this.setState({
            userInput: input
        });
    }

    filterObject(str){
        let arr = this.state.unFilteredArray;
        let filteredArray = arr.filter( obj => obj.hasOwnProperty(str));
        this.setState({
            filteredArray: filteredArray
        });
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzzleText">{ JSON.stringify(this.state.unFilteredArray) }</span>
                <input type="text" className="inputLine" onChange={ (element) => this.handleChange(element.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.filterObject(this.state.userInput) }>Filter the Objects</button>
                <span className="resultsBox filterObjectPB">{ JSON.stringify(this.state.filteredArray) }</span>
            </div>
        );
    }
}