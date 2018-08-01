import {UPDATE_SESSION} from './actions/sessions'



export const socketIo = socketio => store => next => action => {
  if (action.type === UPDATE_SESSION) {
     
    socketio.connect(store.dispatch)
  }


  next(action)
}