import React, { Component } from "react";
import "./App.css";
import NavBar from "./layout/Navigation";
import Generator from "./generator/Generator";

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
    let initArray = [];
    for (let i = 1; i <= 100; i++) {
      initArray.push(i);
    }
    this.setState({
      numArray: initArray
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Generator
          style={userStyle}
          numberShuffle={this.suffle}
          clearBoard={this.clear}
        />
        <div className="container">{this.state.numArray}</div>
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
