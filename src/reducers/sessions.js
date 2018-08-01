import {ADD_SESSION, SET_SESSION, ALL_SESSIONS, UPDATE_SESSION, STARTED_SESSIONS, FINISHED_SESSIONS} from '../actions/sessions'

export default (state = {}, {type, payload}) => {
    switch (type) {
      case ADD_SESSION:
        return {
          ...state,
          payload
        }
        // case GET_SESSION:
        // return {
        //   ...payload
        // }
        case UPDATE_SESSION:
          if(payload[0]){ return payload} else {
            return {
              0:payload
            }
          }
        
        
        case SET_SESSION:
          if(payload[0]){ return payload} else {
            return {
              0:payload
            }
          }
        case ALL_SESSIONS:
        return {...payload.filter((session)=>session.status==='created')}
        case STARTED_SESSIONS:
        return {...payload.filter((session)=>session.status==='started')}
        case FINISHED_SESSIONS:
        return {...payload.filter((session)=>session.status==='finished')}
      default:
        return state
    }
  }
  