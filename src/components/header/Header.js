import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Header.css'


class Headers extends Component {
  render() {
    return (
    
      
    <div className="headerdiv">
    <NavLink 
        to={`/createsession`}
        activeStyle={{color: '#F1F1F1'}}
        >create session </NavLink>
    <NavLink 
        to={`/sessions`}
        activeStyle={{color: '#F1F1F1'}}
        >all sessions </NavLink>
    <NavLink 
        to={`/about`}
        activeStyle={{color: '#F1F1F1'}}
        >about </NavLink>   
    <NavLink 
        activeStyle={{color: '#F1F1F1'}}
        to={`/FAQ`}
        >FAQ </NavLink>  
    <NavLink 
        activeStyle={{color: '#F1F1F1'}}
        to={`/contact`}
        >contact</NavLink>
    </div>
   
    )
  }
}



export default connect()(Headers)