import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Piece.css'


class Piece extends Component {
render() {
    return (
    <div className={`Piece ${this.props.color} `}> <span className={`r`}> </span>
      {this.props.i===0 && <div>left</div>}
      {this.props.i===this.props.x.length-1 && <div>right</div>}
      {this.props.w===0 && <div>up</div>}
      {this.props.w===this.props.a.length-1 && <div>down</div>}
      {this.props.i!==0 && <div>{this.props.i!==this.props.x.length-1 && <div> {this.props.w!==0 && <div>{this.props.w!==this.props.a.length-1 && <div className="t">everything else</div>}</div>}</div>}</div>}


    </div>
    )
  }
}

export default connect() (Piece)