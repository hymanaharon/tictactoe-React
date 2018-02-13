import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Overlay from './overlay.js'
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

      this.state = {
      squares: Array(9).fill(null),
      xIsNext: true

    };
  }

  handleClick(i) {
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


    return(
       <div>
      <div className="gameP">

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


class Game extends Component {
  constructor() {
     super()
     this.state = {
       overlayIsVisible: true,
       startingLetter: ''
     }
   }

   toggleOverlay = (letter) => {
       this.setState({
     startingLetter: letter === 'X' ? 'X' : 'O',
     overlayIsVisible: !this.state.overlayIsVisible
   })
 }


  render() {
    console.log('Current overlayIsVisible', this.state.overlayIsVisible)
    console.log('Starting letter', this.state.startingLetter)

    return (
      <div className="game">
      <div className= "status"><XIsNext start ={this.state.startingLetter} /></div>
        <div className="game-board">
          {this.state.overlayIsVisible && <Overlay toggleOverlay={this.toggleOverlay} />}
          <Board />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
