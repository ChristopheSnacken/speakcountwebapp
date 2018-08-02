import React, {Component} from 'react'
import { connect } from 'react-redux'

import './Puzzle.css'


class Report extends Component {


  render() {
    
    return (  
<div>{this.props.session.pieces_to_complete} /{this.props.session.number_of_pieces+this.props.session.quality_pieces}
</div>
    )
  }
}

const mapStateToProps = function (state) {
    return {
     session: state.sessions[0],
     puzzle: state.puzzle
    }
  }




export default connect(mapStateToProps)(Report)