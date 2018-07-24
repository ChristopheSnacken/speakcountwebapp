import React, {Component} from 'react'
import { connect } from 'react-redux'

class Session extends Component {
  render() {
    return (  
    <div className="Session">
     Don't contact us
    </div> 
    )
  }
}



export default connect()(Session)