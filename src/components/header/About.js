import React, {Component} from 'react'
import { connect } from 'react-redux'



class About extends Component {
  render() {
    return (      
    <div className="about">
        it's about nothing
    </div>
   
    )
  }
}



export default connect()(About)