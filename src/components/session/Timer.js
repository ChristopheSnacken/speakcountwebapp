import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Session.css'


class Session extends Component {
state={count:0}

componentWillMount () { 
    this.setState({count:this.props.time})
}

componentDidMount () {
    let counter = setInterval(() => {   
        if(this.state.count===0){clearInterval(counter); console.log('finished')}
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

export default connect() (Session)
