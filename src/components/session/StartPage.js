import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './StartPage.css'
import mainLogo from'../../images/logo-website.png';
import phones from'../../images/phone-app.png';


class StartPage extends Component {
  componentDidMount(){

  }

  render() {
    return (
    <div className="Startpage">
       <img  className="mainLogo" src={mainLogo} alt="speakcount"/>
      <div className="buttons">
          <Link to={"/createSession"}><button type="submit" className="submit">Create a session</button></Link>
          <Link to={"/sessions"}><button type="submit" className="submit2">Scheduled sessions</button></Link>
      </div>
       <div className="introText">Participants can join the SpeakCount session on their <br/>phone with the unique session code</div>


       <img  className="phones" src={phones} alt="phones"/>
    </div>
    )
  }
}
// const mapStateToProps = function (state) {
//     return {
//      session: state.sessions,
//     }
//   }


// const mapDispatchToProps = dispatch => {
//     return {

//     };
  // };



  export default connect()(StartPage)
