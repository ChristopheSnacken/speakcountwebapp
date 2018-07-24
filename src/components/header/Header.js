import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class Headers extends Component {
  render() {
    return (
    
      
    <div className="header">
    <Link to={`/makesession`}>session </Link>
        <Link to={`/about`}>about </Link>   
        <Link to={`/FAQ`}>FAQ </Link>  
        <Link to={`/contact`}>contact</Link>
    </div>
   
    )
  }
}



export default connect()(Headers)