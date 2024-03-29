import React, { Component } from "react";
import PropTypes from "prop-types";

class Generator extends Component {
  static propTypes = {
    numberShuffle: PropTypes.func.isRequired,
    clearBoard: PropTypes.func.isRequired
  };

  render() {
    const { numberShuffle, clearBoard } = this.props;

    return (
      <div className="card" style={userStyle}>
        <button className="btn btn-primary" onClick={numberShuffle}>
          Generate
        </button>
        <button className="btn btn-primary" onClick={clearBoard}>
          Clear
        </button>
      </div>
    );
  }
}

const userStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default Generator;
