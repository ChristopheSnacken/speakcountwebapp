import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Piece.css'


class Piece extends Component {
render() {
    return (
    <div className="Piece">
       {this.props.id}
       {this.props.color}
    </div>
    )
  }
}

export default connect() (Piece)