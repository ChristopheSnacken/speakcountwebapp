import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Session.css'
import { Link } from 'react-router-dom'
import phone from '../../images/phone.png'
import {startAndStopMessage, fetchSession} from '../../actions/sessions'

class SessionJoining extends Component {
  startClick = () => {
    this.props.stopMe(this.props.session.id, "started")
  }
  componentDidMount() {
   console.log(this)
  }

  render() {
    
    return (<div className="code" >

      {
        this.props.session && <div className= "code1"> <img  className="mainLogo" src={phone} alt="speakcount"/><div className= "codeTitle"><div>Enter this code in the mobile app to join <b>{this.props.session.topic} discussion </b><div className="Session">
             <b>{this.props.session.id}</b>
          </div></div></div>{console.log("status ", this.props.session.status)}</div>
      }
      {
        this.props.session && <div className="participants">
            {this.props.session.joined_participants} of {this.props.session.number_of_participants} participants joined</div>
      }


       <button className="submit" onClick={this.startClick}>
        Start session
      </button>
   
    </div>)
  }
}
const mapStateToProps = function(state) {
 return {session: state.sessions[0]}
}

const mapDispatchToProps = dispatch => {
  return {
    stopMe: (session, message) => {
      dispatch(startAndStopMessage(session, message))
    },
    fetchSession: (session) => {
      dispatch(fetchSession(session))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionJoining)


// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import './Session.css'
// import { Link } from 'react-router-dom'
// import phone from '../../images/phone.png'
// import {startAndStopMessage, fetchSession} from '../../actions/sessions'

// class SessionJoining extends Component {
//   startClick = () => {
//     this.props.stopMe(this.props.match.params.id, "started")
//   }
//   componentDidMount() {
//     this.props.fetchSession(this.props.match.params.id)
//   }

//   render() {
    
//     return (<div className="code" >

//       {
//         this.props.session && <div className= "code1"> <img  className="mainLogo" src={phone} alt="speakcount"/><div className= "codeTitle"><div>Enter this code in the mobile app to join <b>{this.props.session.topic} discussion </b><div className="Session">
//              <b>{this.props.session.id}</b>
//           </div></div></div>{console.log("status ", this.props.session.status)}</div>
//       }
//       {
//         this.props.session && <div className="participants">
//             {this.props.session.joined_participants} of {this.props.session.number_of_participants} participants joined</div>
//       }


//        <button className="submit" onClick={this.startClick}>
//         Start session
//       </button>
//       <Link to={"/sessions"}><button type="submit" className="submit2">Back</button></Link>

//     </div>)
//   }
// }
// const mapStateToProps = function(state) {
//   return {session: state.sessions[0]}
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     stopMe: (session, message) => {
//       dispatch(startAndStopMessage(session, message))
//     },
//     fetchSession: (session) => {
//       dispatch(fetchSession(session))
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SessionJoining)
