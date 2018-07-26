import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getAllSessions }  from '../../actions/sessions'
import SessionItem from './SessionItem'


  class SessionsList extends PureComponent {
  
    componentDidMount(){
      this.props.getAllSessions()
    }


    render() {
      return(
         <div style={{margin:80}}>
           {this.props.sessions &&
           <div>
               
             {this.props.sessions.map(session=> <SessionItem {...session} />)}

          
            </div>
           }
         </div>
         )
       }
  }

  const mapStateToProps = state => ({
    sessions: state.sessions === null ?
    null : Object.values(state.sessions).sort((a, b) => b.id - a.id)
  })

  const mapDispatchToProps = dispatch => {
    return {
        getAllSessions: () => {
        dispatch(getAllSessions());
      }
    };
  };


  export default connect( mapStateToProps, mapDispatchToProps ) (SessionsList)
