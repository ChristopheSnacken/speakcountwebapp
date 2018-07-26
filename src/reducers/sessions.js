import {ADD_SESSION, GET_SESSION, STOP_SESSION} from '../actions/sessions'

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
        case STOP_SESSION:
        return{
            ...state,
            payload
        }
  
     
      default:
        return state
    }
  }
  