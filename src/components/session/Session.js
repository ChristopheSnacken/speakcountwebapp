import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Session.css'
import { Link } from 'react-router-dom'
import SessionJoining from './SessionJoining'
import SessionInProgress from './SessionInProgress'
import {startAndStopMessage, fetchSession} from '../../actions/sessions'

class Session extends Component {
  componentDidMount() {
    this.props.fetchSession(this.props.match.params.id)
  }
  render() {
    return (<div className="code" >
    {!this.props.session && <div>loading</div>}
    {/* check if it's defined and then what the status is */}
      { this.props.session &&
      <div> {this.props.session.status==='created' && <div> <SessionJoining />  </div> }
      <div> {this.props.session.status==='started' && <div> <SessionInProgress />  </div> }</div>
      <div> {this.props.session.status==='finished' && <div> this session is finished  </div> }</div>
      </div>
    }


      <Link to={"/sessions"}><button type="submit" className="submit2">Back</button></Link>

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

export default connect(mapStateToProps, mapDispatchToProps)(Session)
