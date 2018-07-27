import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Session.css'
import { Link } from 'react-router-dom'
import phone from '../../images/phone.png'

import {earlyStopSession, fetchSession} from '../../actions/sessions'

class Session extends Component {
  stopClick = () => {
    this.props.stopMe(this.props.match.params.id)
  }

  componentDidMount() {
    this.props.fetchSession(this.props.match.params.id)
  }

  render() {
    console.log("props", this.props.session)
    return (<div className="code" >

      {
        this.props.session && <div className= "code1"> <img  className="mainLogo" src={phone} alt="speakcount"/><div className= "codeTitle"><div>Enter this code in the mobile app to join <b>{this.props.session.topic} discussion </b><div className="Session">
             <b>{this.props.session.id}</b>
          </div></div></div></div>
      }
      {
        this.props.session && <div className="participants">
            {this.props.session.joined_participants} of {this.props.session.number_of_participants} participants joined</div>
      }
      <button className="submit" onClick={this.stopClick}>
        Stop session
      </button>
      <Link to={"/sessions"}><button type="submit" className="submit2">Back</button></Link>

    </div>)
  }
}
const mapStateToProps = function(state) {
  return {session: state.sessions[0]}
}

const mapDispatchToProps = dispatch => {
  return {
    stopMe: (session) => {
      dispatch(earlyStopSession(session))
    },
    fetchSession: (session) => {
      dispatch(fetchSession(session))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Session)
