import {ADD_SESSION, SET_SESSION, ALL_SESSIONS, UPDATE_SESSION} from '../actions/sessions'

export default (state = {}, {type, payload}) => {
    switch (type) {
      case ADD_SESSION:
        return {
          ...state,
          ...payload
        }
        // case GET_SESSION:
        // return {
        //   ...payload
        // }
        case UPDATE_SESSION:
        return {
          ...payload
        }
        
        case SET_SESSION:
        return{
            ...payload
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
  