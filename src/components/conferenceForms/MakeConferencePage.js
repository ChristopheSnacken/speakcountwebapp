import React, {Component} from 'react'
import { createSession } from '../../actions/sessions'
import { connect } from 'react-redux'
import  MakeConferenceForm  from './MakeConferenceForm'


class MakeConferencePage extends Component {
  handleSubmit = (data) => {
   console.log("data",data)
    // const newData={
    //   ...data,
    // }
   this.props.addSession(data)
  }
  componentDidMount() {
  }
  render() {
    console.log(this.props.session)
    return (
    
      
    <div className="conference">
      <MakeConferenceForm onSubmit={this.handleSubmit} />     
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
    
      addSession: (session) => {
        dispatch(createSession(session))
      },
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(MakeConferencePage)
