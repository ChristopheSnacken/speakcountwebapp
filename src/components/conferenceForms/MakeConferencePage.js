import React, {Component} from 'react'
import { createSession } from '../../actions/sessions'
import { connect } from 'react-redux'
import  MakeConferenceForm  from './MakeConferenceForm'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import mainLogo from'../../images/logo-website.png';
import { Link } from 'react-router-dom';



class MakeConferencePage extends Component {
  state = {
    redirect: false
  }

  handleSubmit = (data) => {
    // const newData={
    //   ...data,
    // }
    
   if(!data.numberOfParticipants){ console.log("How many people want to join?")}
      else if (!data.topic){ console.log("what is it about?")}
      else if (!data.startTime){ console.log("When does it start?")}
      else if (!data.stimatedTime){console.log("when does it stop?")}
     else{
       const topic = data.topic
       const stimatedTime = data.stimatedTime*60
       const numberOfParticipants = Number(data.numberOfParticipants)
       const startTime = data.startTime
       const newData ={
        topic, stimatedTime, numberOfParticipants, startTime
       }
     
        this.props.addSession(newData)
        this.setState({redirect:true})
    }

  }



  render() {
    if (this.state.redirect) {
      return <Redirect to='/sessions' />
    }
    return (
    <div className="conference">
     <Link to={"/start"}><img  className="mainLogo" src={mainLogo} alt="speakcount"/></Link>

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
