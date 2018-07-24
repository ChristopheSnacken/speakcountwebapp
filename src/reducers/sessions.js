import {ADD_SESSION, GET_SESSION} from '../actions/sessions'

export default (state = null, {type, payload}) => {
    switch (type) {
      case ADD_SESSION:
        return {
          ...state,
          ...payload
        }
        case GET_SESSION:
        return {
            payload
        }
  
     
      default:
        return state
    }
  }
  