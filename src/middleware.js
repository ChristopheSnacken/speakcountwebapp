import {UPDATE_SESSION} from './actions/sessions'



export const socketIo = socketio => store => next => action => {
  if (action.type === UPDATE_SESSION) {
      console.log("socket", store)
    socketio.connect(store.dispatch)
  }


  next(action)
}