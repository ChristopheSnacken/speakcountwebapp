import React, {Component} from 'react'
import { connect } from 'react-redux'
import {newPuzzle} from '../../actions/puzzle'
import './Puzzle.css'
import Piece from './Piece'

class Puzzle extends Component {
    componentDidMount(){
       const PuzzlePieces=this.props.session.number_of_pieces + this.props.session.quality_pieces 
       console.log(PuzzlePieces)
       this.props.newPuzzle(PuzzlePieces)
    }
  render() {
    return (  

    <div className="Puzzle">

    {this.props.puzzle&&<div>{this.props.puzzle.map((row)=><div className="row">{row.map((color)=><Piece {...color} />)} </div>)}
     </div>
     }
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

  const mapDispatchToProps = dispatch => {
    return {
      newPuzzle: (x) => {
        dispatch(newPuzzle(x));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Puzzle)