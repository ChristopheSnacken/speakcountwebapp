import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getFinishedSessions }  from '../../actions/sessions'
import SessionItem from './SessionItem'
import mainLogo from '../../images/logo-website.png';
import './SessionsList.css'
import { Link } from 'react-router-dom'
import archived from '../../images/icon-archive.png';



  class FinishedSessions extends PureComponent {

    componentDidMount(){
      this.props.getFinishedSessions()
    }


    render() {
      return(

         <div  className="mainList">
           <div className="mailnLogoList"><Link to={"/start"}><img  className="mainLogo" src={mainLogo} alt="speakcount"/></Link></div>


           {this.props.sessions &&
           <div >
             <div className="logos1" id="logos"><img className='archived' src={archived} alt="archived"/> Archived sessions</div>

             {this.props.sessions.map(session=> <SessionItem  {...session} />)}


            </div>
           }
           <Link to={"/start"}><button type="submit" className="submit2">Back</button></Link>
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
        getFinishedSessions: () => {
        dispatch(getFinishedSessions());
      }
    };
  };


  export default connect( mapStateToProps, mapDispatchToProps ) (FinishedSessions)
