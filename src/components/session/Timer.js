import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Session.css'
import { Line } from 'rc-progress';

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
    let time = Math.floor((this.state.count/ this.props.session.stimated_time ) * 100).toString() 
    return (
    <div className="Timer">
       {/* {this.state.count} */}
       <Line percent={time} strokeColor="#FFD02B" style={{width:500}} />
        <p>{this.props.session.stimated_time/ 60} minute session</p>
    </div>
    
    )
  }
}

const mapStateToProps = function(state) {
    return {session: state.sessions[0]}
  }

export default connect(mapStateToProps) (Timer)
