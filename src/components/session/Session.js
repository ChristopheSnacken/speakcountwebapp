import React, {Component} from 'react'
import { connect } from 'react-redux'

import { earlyStopSession } from '../../actions/sessions'


class Session extends Component {
    stopClick = () => {
       this.props.stopMe("stop")
      }

  componentDidMount(){
  
  }

  render() {
    return (  
    <div className="Session">
   
     {/* {this.props.session.sessionId}
     */}
      <button onClick={this.stopClick}> Stop session  </button>
      </div> 
    )
  }
}
const mapStateToProps = function (state) {
    return {
     session: state.sessions,
    }
  }


const mapDispatchToProps = dispatch => {
    return {
        stopMe: (session) => {
            dispatch(earlyStopSession(session))
      },
    };
  };



  export default connect(mapStateToProps, mapDispatchToProps)(Session)