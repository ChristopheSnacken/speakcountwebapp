import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getStartedSessions }  from '../../actions/sessions'
import SessionItem from './SessionItem'
import mainLogo from '../../images/logo-website.png';
import './SessionsList.css'
import { Link } from 'react-router-dom'



  class StartedSessionList extends PureComponent {

    componentDidMount(){
      this.props.getStartedSessions()
    }


    render() {
      return(

         <div  className="mainList">
           <div className="mailnLogoList"><Link to={"/start"}><img  className="mainLogo" src={mainLogo} alt="speakcount"/></Link></div>


           {this.props.sessions &&
           <div >
             <div className="logos" id="logos"> Started Sessions</div>

             {this.props.sessions.map(session=> <SessionItem {...session} />)}


            </div>
           }
           <Link to={"/createSession"}><button type="submit" className="submit2">Back</button></Link>
         </div>
         )
       }
  }

  const mapStateToProps = state => ({
    sessions: state.sessions === null ?
    null : Object.values(state.sessions).sort((a, b) => b.id - a.id)
  })

  const mapDispatchToProps = dispatch => {
    return {
        getStartedSessions: () => {
        dispatch(getStartedSessions());
      }
    };
  };


  export default connect( mapStateToProps, mapDispatchToProps ) (StartedSessionList)
