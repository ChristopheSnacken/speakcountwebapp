import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './StartButton.css'

class StartButton extends Component {
  componentDidMount(){
  
  }

  render() {
    return (  
    <div className="StartButton">
      <NavLink to='/createsession' />
    </div> 
    )
  }
}

  export default connect()(StartButton)