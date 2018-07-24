//import * as request from 'superagent'
//import {baseUrl} from '../constants'
// import {logout} from './users'
// import {isExpired} from '../jwt'
// import {localStorageJwtKey} from '../constants'

export const ADD_SESSION = 'ADD_SESSION'
export const GET_SESSION = 'GET_SESSION'




const addSession = session => ({
  type: ADD_SESSION,
  payload: session
})

const getSession = session =>({
    type: GET_SESSION,
    payload: session
})




// export const getEvents = () => (dispatch) => {
// //   const jwt = localStorage.getItem(localStorageJwtKey)

//   request
//    .get(`${baseUrl}/events`)
//    .then(result => dispatch(updateEvents(result.body)))
//    .catch(err => console.error(err))
// }

// export const fetchEvent = (eventId) => (dispatch) => {
//   const jwt = localStorage.getItem('authToken')
  

//   request
//     .get(`${baseUrl}/events/${eventId}`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .then(response => dispatch(updateEvent(response.body)))
//     .catch(err => alert(err))

// }
export const fetchSession = (session)=> dispatch =>{
    dispatch(getSession(session) )
}


export const createSession = (data) => (dispatch) => {
 //   const jwt = localStorage.getItem(localStorageJwtKey)
  //const {topic, participents, date, time, EstimatedDuration,  } = data
  //dispatch(addSession(topic, participents, date, time, EstimatedDuration) )

  dispatch(addSession(data) )
//   request
//     .post(`${baseUrl}/events`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .send({description, logo, startDate, endDate})
//     .then(result => dispatch(addEvent(result.body)))
}
