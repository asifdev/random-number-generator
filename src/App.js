import React, { Component } from "react";
import { FixedSizeList as List } from "react-window";

import NavBar from "./layout/Navigation";
import Generator from "./generator/Generator";

import "./App.css";

class App extends Component {
  //Initial state
  state = {
    numArray: []
  };

  //Clears the generated number
  clear = () => {
    this.setState({
      numArray: []
    });
  };

  //Generates random unique numbers between 1 - 10,000
  generateNumber = () => {
    let j = 0;
    let temp;

    let array = [];
    for (let i = 1; i <= 10000; i++) {
      array.push(i);
    }

    let i = array.length;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    this.setState({
      numArray: array
    });
  };

  render() {
    const { numArray } = this.state;

    //Set the Styling
    const Row = ({ index, style }) => (
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        {numArray[index]}
      </div>
    );

    //Set the data into list
    const NumberList = () => (
      <List
        className="wrapper"
        height={1500}
        itemCount={numArray.length}
        itemSize={35}
        width={600}
      >
        {Row}
      </List>
    );

    return (
      <div className="App">
        <NavBar />
        <Generator
          style={userStyle}
          clearBoard={this.clear}
          numberShuffle={this.generateNumber}
        />
        <div className="container">
          <NumberList />
        </div>
      </div>
    );
  }
}

const userStyle = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center"
};

export default App;
