import React, {Component} from 'react'
import { connect } from 'react-redux'



class Faq extends Component {
  render() {
    return (    
    <div className="Faq">
        Don't ask me anything
    </div>
   
    )
  }
}
export default connect()(Faq)