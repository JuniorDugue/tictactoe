import React, {Component} from "react"
import "./game.scss";

export default class Game extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="game">
        <p>Game Component</p>
      </div>
    )
  }
}