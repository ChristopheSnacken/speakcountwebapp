import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Header.css'


class Headers extends Component {
  render() {
    return (


    <div className="headerdiv">


    <NavLink
        className="links"
        activeStyle={{color: '#F1F1F1'}}
        to={`/FAQ`}
        >More information </NavLink>

    </div>

    )
  }
}



export default connect()(Headers)
