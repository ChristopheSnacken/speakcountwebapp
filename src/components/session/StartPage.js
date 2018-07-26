import React, {Component} from 'react'
import { connect } from 'react-redux'
import StartButton from './StartButton';

class StartPage extends Component {
  componentDidMount(){
  
  }

  render() {
    return (  
    <div className="Startpage">
      <StartButton />
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