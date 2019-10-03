import React, { Component } from "react";
import "./App.css";
import NavBar from "./layout/Navigation";
import Generator from "./generator/Generator";
import { FixedSizeList as List } from "react-window";

// import PropTypes from "prop-types";

class App extends Component {
  // static propTypes = {
  //   suffle: PropTypes.func.isRequired
  // };
  state = {
    numArray: []
  };

  clear = () => {
    this.setState({
      numArray: []
    });
  };

  suffle = () => {
    console.log("Suffled");
    let array = [];
    for (let i = 1; i <= 10000; i++) {
      array.push(i);
    }

    var i = array.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    //   return array;

    this.setState({
      numArray: array
    });
  };
  render() {
    // const listItems = this.state.numArray.map(number => (
    //   <li className="box" key={number}>
    //     {number}
    //   </li>
    // ));

    const listItems = this.state.numArray;

    const Row = ({ index, style }) => (
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        {listItems[index]}
      </div>
    );

    const Example = () => (
      <List
        className="wrapper"
        height={1500}
        itemCount={this.state.numArray.length}
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
          numberShuffle={this.suffle}
          clearBoard={this.clear}
        />
        <div className="container">
          {/* <ul className="wrapper">{listItems}</ul> */}
          <Example />
        </div>
      </div>
    );
  }
}

const userStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default App;
