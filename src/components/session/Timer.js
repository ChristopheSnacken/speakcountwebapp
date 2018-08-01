import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Session.css'


class Timer extends Component {
state={count:0}

componentWillMount () { 
    this.setState({count:this.props.session.stimated_time})
}

componentDidMount () {
    let counter = setInterval(() => {   
        if(this.state.count===0){clearInterval(counter); console.log('Running late')}
        this.setState((previousState) => {
              return {count: previousState.count - 1};
          });
    },1000)
} 
render() {
    return (
    <div className="Timer">
       {this.state.count}
    </div>
    )
  }
}

const mapStateToProps = function(state) {
    return {session: state.sessions[0]}
  }

export default connect(mapStateToProps) (Timer)
