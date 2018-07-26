import {ADD_SESSION, GET_SESSION, STOP_SESSION, ALL_SESSIONS} from '../actions/sessions'

export default (state = {}, {type, payload}) => {
    switch (type) {
      case ADD_SESSION:
        return {
          ...state,
          ...payload
        }
        case GET_SESSION:
        return {
          ...payload
        }
        
        case STOP_SESSION:
        return{
            ...state,
            payload
        }
        case ALL_SESSIONS:
        return payload.reduce((sessions, session) => {
          sessions[session.id] = session
          return sessions
        }, {})
     
      default:
        return state
    }
  }
  