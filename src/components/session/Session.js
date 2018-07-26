import React, {Component} from 'react'
import { connect } from 'react-redux'

import { earlyStopSession, fetchSession } from '../../actions/sessions'


class Session extends Component {
    stopClick = () => {
       this.props.stopMe(this.props.match.params.id)
      }

  componentDidMount(){
    this.props.fetchSession(this.props.match.params.id)
  }

  render() {
    console.log("props",this.props.session)
    return (  
    <div className="Session">
    {this.props.session && <div> {this.props.session.id} </div>}
     
      <button onClick={this.stopClick}> Stop session  </button>

      {this.props.session && <div> {this.props.session.joined_participants}/ {this.props.session.number_of_participants}</div>}

     
      </div> 
    )
  }
}
const mapStateToProps = function (state) {
    return {
     session: state.sessions[0]
    }
  }


const mapDispatchToProps = dispatch => {
    return {
        stopMe: (session) => {
            dispatch(earlyStopSession(session))
      },
      fetchSession:(session)=>{
        dispatch(fetchSession(session))
      }
    };
  };



  export default connect(mapStateToProps, mapDispatchToProps)(Session)