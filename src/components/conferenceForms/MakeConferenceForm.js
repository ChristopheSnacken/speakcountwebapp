import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


  class MakeConferenceForm extends PureComponent {
    state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
		this.setState({title:'', message:'' })
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }


    render() {
      return(
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="topic">topic</label>
					<input type="topic" name="topic" id="topic" value={
						this.state.topic || ''
					} onChange={ this.handleChange } />
				</div>

                <div>
					<label htmlFor="date">date</label>
					<input type="date" name="date" id="date" value={
						this.state.date || ''
					} onChange={ this.handleChange } />
				</div>
                
                <div>
					<label htmlFor="time">time</label>
					<input type="time" name="time" id="time" value={
						this.state.time || ''
					} onChange={ this.handleChange } />
				</div>

                 <div>
					<label htmlFor="EstimatedDuration">EstimatedDuration</label>
					<input type="time" name="EstimatedDuration" id="EstimatedDuration" value={
						this.state.EstimatedDuration || ''
					} onChange={ this.handleChange } />
				</div>
          
        <div>
        <label htmlFor="participants">participants</label>
                <select onChange = { this.handleChange }>
                    <option value = ""> participants </option>
                    <option value = "2"> 2 </option>
                    <option value = "3"> 3 </option>
                    <option value = "4"> 4 </option>
                    <option value = "5"> 5 </option>
                    <option value = "6"> 6 </option>
                    <option value = "7"> 7 </option>
                    <option value = "8"> 8 </option>
                    <option value = "9"> 9 </option>
                    <option value = "10"> 10 </option>
                </select>
            </div>
				<button type="submit">Proceed</button>
			</form>
         )
       }
  }





  export default connect( ) (MakeConferenceForm)