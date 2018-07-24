import React, {Component} from 'react'
import { connect } from 'react-redux'



class Contact extends Component {
  render() {
    return (  
    <div className="Contact">
     Don't contact us
    </div> 
    )
  }
}



export default connect()(Contact)