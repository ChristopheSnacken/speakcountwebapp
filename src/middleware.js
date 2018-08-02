import {UPDATE_SESSION} from './actions/sessions'
import {GET_PIECE} from './actions/puzzle'



export const socketIo = socketio => store => next => action => {
  if (action.type === UPDATE_SESSION) {
     
    socketio.connect(store.dispatch)
  }

  if (action.type === GET_PIECE) {
     
    socketio.connect(store.dispatch)
  }


  next(action)
}