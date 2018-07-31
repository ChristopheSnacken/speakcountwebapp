import {MAKE_PUZZLE, GET_PIECE} from '../actions/puzzle'

export default (state = [], {type, payload}) => {
    switch (type) {
      case MAKE_PUZZLE:
        return [...payload]
      case GET_PIECE:
        return [...state, ...payload]
      default:
        return state
    }
  }
  