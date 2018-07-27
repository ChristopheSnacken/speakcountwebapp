import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

  class SessionItem extends PureComponent {
    componentDidMount(){
      
    }


    render() {
      return(
         <div className="EventStyle" >
         <h3>{this.props.description}</h3>
         <div className="Date"> Topic: {this.props.topic}</div>
        <div className="Date"> Start date: {this.props.start_time}</div>
        <Link to={"/sessions/"+ this.props.id}>More info</Link>
   
    
         </div>
         )
       }
  }





  export default connect( ) (SessionItem)