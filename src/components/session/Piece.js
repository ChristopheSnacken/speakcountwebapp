import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Piece.css'


class Piece extends Component {
render() {
    return (
    <div className={`Piece ${this.props.color}  `}>
       {this.props.i===0 && <div className={`Piece ${this.props.color} r `}>left</div>}
      {this.props.i===this.props.x.length-1 && <div>right</div>}
      {this.props.w===0 && <div className={`Piece ${this.props.color} b `}>up</div>}
      {this.props.w===0 && <div >up</div>}
      {this.props.w===this.props.a.length-1 && <div>down</div>}
      {this.props.i!==0 && <div>{this.props.i!==this.props.x.length-1 && <div> {this.props.w!==0 && <div>{this.props.w!==this.props.a.length-1 && <div className={` ${this.props.color} r `}> everything else</div>}</div>}</div>}</div>} 


    </div>
    )
  }
}

export default connect() (Piece)