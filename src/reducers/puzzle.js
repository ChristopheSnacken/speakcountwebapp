import {MAKE_PUZZLE, GET_PIECE} from '../actions/puzzle'

export default (state = [], {type, payload}) => {
    switch (type) {
      case MAKE_PUZZLE:
        return [...payload]
      case GET_PIECE:
        return state.map((row)=> row.map((cel)=> {if(cel.id===payload){return {id:payload, color:"yellow"}}else{ return cel }} ) )
      default:
        return state
    }
  }
  