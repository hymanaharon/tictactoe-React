import React, {Component} from 'react';


class Overlay extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible: true
    };
  }

  handleClick(letter){
     this.props.toggleOverlay(letter);
      }

  render(){
    return(
      <div className = "overlay" >
        To start Choose
        <button
        className="x"
        onClick={()=>this.handleClick('X')}
        > &nbsp;X</button> or
        <button
        className="o"
        onClick={()=>this.handleClick('O')}
        >&nbsp;O</button>
      </div>
    );
  }
}

export default Overlay;
