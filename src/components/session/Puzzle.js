import React, {Component} from 'react'
import { connect } from 'react-redux'
import {newPuzzle, changePuzzle} from '../../actions/puzzle'
import './Puzzle.css'
import Piece from './Piece'

class Puzzle extends Component {
 
    componentDidMount(){
       const PuzzlePieces=this.props.session.number_of_pieces + this.props.session.quality_pieces 
       this.props.newPuzzle(PuzzlePieces)
       this.setState({count:-1})
    }

    componentDidUpdate(prevProps){
      if (prevProps.session.pieces_to_complete !== this.props.session.pieces_to_complete) {
        this.props.changePuzzle(this.props.puzzle, this.state.count)  
        this.setState((previousState) => {
        return {count: previousState.count + 1};
    })
      }
    }
    puzzleClick = () => {   
      this.props.changePuzzle(this.props.puzzle, this.state.count)  
      this.setState((previousState) => {
        return {count: previousState.count + 1};
    })
    }
  render() {
    
    return (  
<div><button onClick={this.puzzleClick.bind(this)}>change color</button>
    <div className="Puzzle">


    {this.props.puzzle&&<div>{this.props.puzzle.map((row,w,a)=><div className="row">{row.map((color, i,x)=><Piece {...color} w={w} i={i} a={a} x={x}/>)} </div>)}
     </div>
     }
    </div> 

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
      },
      changePuzzle: (x,y) => {
        dispatch(changePuzzle(x,y));
      }
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(Puzzle)