import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Piece.css'


class Piece extends Component {
render() {
    return (
    <div className={`Piece ${this.props.color}  `}>
       {this.props.i===0 && <div className={`Piece ${this.props.color} r `}></div>}
       {/* left */}
      {this.props.i===this.props.x.length-1 && <div></div>}
      {/* right */}
      {this.props.w===0 && <div className={`Piece ${this.props.color} b `}></div>}
      {/* up */}
      {this.props.w===0 && <div ></div>}
      {/* up */}
      {this.props.w===this.props.a.length-1 && <div></div>}
      {/* down */}
      {this.props.i!==0 && <div>{this.props.i!==this.props.x.length-1 && <div> {this.props.w!==0 && <div>{this.props.w!==this.props.a.length-1 && <div className={` ${this.props.color} r `}> </div>}</div>}</div>}</div>}
      {/* everything else */}


    </div>
    )
  }
}

export default connect() (Piece)
