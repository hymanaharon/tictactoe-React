import React, {Component} from 'react';



function X(props) {

  return (
    <button className="x" onClick={props.onClick}>
      X
    </button>
  );
}

function O(props) {

  return (
    <button className="o" onClick={props.onClick}>
      O
    </button>
  );
}

class Overlay extends Component{

 render(){
   return(
     <div className = "overlay">
      To start Choose <X /> or <O />
     </div>
   );
 }
}

export default Overlay;
