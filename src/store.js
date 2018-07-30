import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import SocketIO from './socketio'
import {socketIo} from './middleware'
import reducers from './reducers'

const reducer = combineReducers(reducers)


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const socket = new SocketIO()


const enhancer = compose(
	applyMiddleware(ReduxThunk, socketIo(socket)),
	devTools
)

const store = createStore(reducer, enhancer)

socket.connect(store.dispatch)

export default store