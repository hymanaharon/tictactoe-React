import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Overlay from './overlay.js'
import Board from './board.js'



class Game extends Component {
  constructor() {
     super()
     this.state = {
       overlayIsVisible: true,
       startingLetter: null,

     }
   }

   toggleOverlay = (letter) => {
       this.setState({
     startingLetter: letter,
     overlayIsVisible: !this.state.overlayIsVisible,

      })
   }

   toggleStartingLetter = () => {
     this.setState({startingLetter: this.state.startingLetter === 'X'? 'O':'X' })
   }

   reset = () => {
       this.setState({
         startingLetter:null,
         overlayIsVisible: true
       })


   }

  render() {
    console.log('Current overlayIsVisible', this.state.overlayIsVisible)
    console.log('Next letter', this.state.startingLetter)

    return (
    <div className="game">
      {this.state.overlayIsVisible && <Overlay toggleOverlay={this.toggleOverlay} />}

        <div className="game-board">

          <Board startingLetter={this.state.startingLetter} toggleStartingLetter={this.toggleStartingLetter} reset={this.reset}/>
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
