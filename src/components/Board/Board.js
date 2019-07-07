import React, { Component } from "react";
import Square from "../Square/Square";
import "./board.scss";

export default class Board extends Component() {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div className="board">
        <p>Board</p>
        <div className="board-border-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
      </div>
    );
  }
}
