import React, {Component} from 'react';
import XIsNext from './xIsNext.js'

function Square(props) {
  function clickHandler(e){
    if (!props.value) {
     props.onClick(e);
   }
 }

  return (
    <button className="square" onClick={clickHandler}>
      {props.value}
    </button>
  );
}




class Board extends Component {

  constructor(props) {
    super(props);
    const firstLetter = this.props.startingLetter === 'X'? false : true;
      this.state = {
      squares: Array(9).fill(null),
      xIsNext: firstLetter
        };
  }


  handleClick(i) {
    this.props.toggleStartingLetter();
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,

    });
  }

  renderSquare(i) {

    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const firstLetter = this.props.startingLetter === 'X'? 'X' : 'O';
    console.log("starting letter", firstLetter)
    return(
       <div>
      <div className="gameP">
      <div className= "status"><XIsNext start ={this.props.startingLetter} /></div>
      <div className="gameLayout">
       <div>
         <div className="board-row">
           {this.renderSquare(0)}
           {this.renderSquare(1)}
           {this.renderSquare(2)}
         </div>
         <div className="board-row">
           {this.renderSquare(3)}
           {this.renderSquare(4)}
           {this.renderSquare(5)}
         </div>
         <div className="board-row">
           {this.renderSquare(6)}
           {this.renderSquare(7)}
           {this.renderSquare(8)}
         </div>
       </div>
      </div>
       </div>
       </div>
     );
   }
 }

 export default Board;
