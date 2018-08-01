import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Piece.css'


class Piece extends Component {
render() {
    return (
    <div className={`Piece ${this.props.color}`}> 
          {this.props.id} 
    </div>
    )
  }
}

export default connect() (Piece)