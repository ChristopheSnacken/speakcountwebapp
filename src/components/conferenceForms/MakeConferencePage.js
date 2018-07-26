import React, {Component} from 'react'
import { createSession } from '../../actions/sessions'
import { connect } from 'react-redux'
import  MakeConferenceForm  from './MakeConferenceForm'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import mainLogo from'../../images/logo-website.png';



class MakeConferencePage extends Component {
  state = {
    redirect: false
  }

  handleSubmit = (data) => {
    // const newData={
    //   ...data,
    // }
   
   if(!data.participants){ console.log("How many people want to join?")}
      // else if (!data.topic){ console.log("what is it about?")}
      // else if (!data.time){ console.log("When does it start?")}
      // else if (!data.EstimatedDuration){console.log("when does it stop?")}
      // else if (!data.date){console.log("What day does it start")}
     else{
        this.props.addSession(data)
        this.setState({redirect:true})
        console.log(this.state.redirect)
    }

  }



  render() {
    if (this.state.redirect) {
      return <Redirect to='/session' />
    }
    return (  
    <div className="conference">
     <img  src={mainLogo} alt="speakcount"/>
     <div className="logos">Create a session</div>
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
