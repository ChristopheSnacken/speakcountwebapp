import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'

  class SessionItem extends PureComponent {
    componentDidMount(){

    }


    render() {
      let date=new Date()
      if(this.props.session.start_time){date=new Date(this.props.session.start_time)}
      
      return(
         <div className="EventStyle" >
           <div className="event">


         <h3>{this.props.session.description}</h3>
         { date && <div className="Date"> {dateFormat(date, "dddd d mmmm")}</div> }
         <div className="Topic">{this.props.session.topic}</div>
         { date && <div className="Time"> Starts at:  {dateFormat(date, "UTC:HH:MM")}</div>  }
       </div>
       <div className="open">

         <Link to={"/sessions/"+ this.props.session.id}><button type="submit" className="submit1">Open</button></Link>

       </div>




        </div>
         )
       }
  }





  export default connect( ) (SessionItem)
