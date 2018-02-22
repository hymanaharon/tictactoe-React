import React, {Component} from 'react';
//import XIsNext from './xIsNext.js'

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
    if (calculateWinner(squares) || squares[i]) {
          return;
        }
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
    //const firstLetter = this.props.startingLetter === 'X'? 'X' : 'O';
    //console.log("starting letter", firstLetter)
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
      } else {
          if (this.props.startingLetter == null) { status = 'Next player: '
        } else {
          status = 'Next player: ' + (this.props.startingLetter === 'X' ? 'X' : 'O');
      }

    }
    return(
       <div>
      <div className="gameP">
      <div className= "status">{status}</div>
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
//=============================WINNER LOGIC FROM REACT DEMO=====================================
 function calculateWinner(squares) {
   const lines = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6],
   ];
   for (let i = 0; i < lines.length; i++) {
     const [a, b, c] = lines[i];
     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
       return squares[a];
     }
   }
   return null;
 }
