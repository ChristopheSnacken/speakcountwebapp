import {ADD_SESSION} from '../actions/sessions'

export default (state = null, {type, payload}) => {
    switch (type) {
      case ADD_SESSION:
        return {
          ...state,
          [payload.id]: payload
        }
  
     
      default:
        return state
    }
  }
  