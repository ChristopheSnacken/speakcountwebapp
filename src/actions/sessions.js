import * as request from 'superagent'
import {baseUrl} from '../constants'

export const ADD_SESSION = 'ADD_SESSION'
export const UPDATE_SESSION = 'UPDATE_SESSION'
export const SET_SESSION = 'SET_SESSION'
export const ALL_SESSIONS = 'ALL_SESSIONS'




const addSession = session => ({
  type: ADD_SESSION,
  payload: session
})

const getSession = session =>({
    type: UPDATE_SESSION,
    payload: session
})

const allSessions = session =>({
    type: ALL_SESSIONS,
    payload: session
})

const stopSession = (sessionId) => ({
    type: SET_SESSION,
    payload: sessionId
})


export const startAndStopMessage= (id,message) => dispatch =>{
    request
    .put(`${baseUrl}/sessions/${id}`)
    .send({status: message})
    .then(result => dispatch(stopSession(result.body) ))
    .catch(err => console.error(err))
}

export const fetchSession = (session)=> dispatch =>{
    request
    .get(`${baseUrl}/sessions/${session}`)
    .then(result => dispatch(getSession(result.body) ))
    .catch(err => console.error(err))
}

export const getAllSessions=()=>dispatch=>{
    request
    .get(`${baseUrl}/sessions`)
    .then(result => dispatch(allSessions(result.body) ))
    .catch(err => console.error(err))
}


export const createSession = (data) => (dispatch) => {
 
  request
    .post(`${baseUrl}/sessions`)
    .send(data)
    .then(result => dispatch(addSession(...result.body) ))
    .catch(err => console.error(err))
}
