import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'

  class SessionItem extends PureComponent {
    componentDidMount(){

    }


    render() {
      const date=new Date(this.props.start_time)

      return(
         <div className="EventStyle" >
           <div className="event">


         <h3>{this.props.description}</h3>
         <div className="Date"> {dateFormat(date, "dddd d mmmm")}</div>
         <div className="Topic">{this.props.topic}</div>
         <div className="Time"> Starts at:  {dateFormat(date, "UTC:HH:MM")}</div>
       </div>
       <div className="open">

         <Link to={"/sessions/"+ this.props.id}><button type="submit" className="submit1">Open</button></Link>

       </div>




         </div>
         )
       }
  }





  export default connect( ) (SessionItem)
