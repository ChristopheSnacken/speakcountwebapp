import React, {Component} from 'react'
import { connect } from 'react-redux'

//import Pieces from './Pieces'

class Puzzle extends Component {
    componentDidMount(){
       const PuzzlePieces=new Array(this.props.session.totalPieces).fill("white")
       console.log("pieces", PuzzlePieces)
    }
  render() {
    console.log(this)
    return (  

    <div className="Puzzle">
    {this.PuzzlePieces&&<div>{this.PuzzlePieces.map((color)=>color)}
     </div>
     }
    </div> 
    )
  }
}

const mapStateToProps = function (state) {
    return {
     session: state.sessions,
    }
  }

export default connect(mapStateToProps)(Puzzle)