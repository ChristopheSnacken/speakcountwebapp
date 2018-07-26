import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './MakeConferenceForm.css'


  class MakeConferenceForm extends PureComponent {
    state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }


    render() {
      return(<div className="MakeConferenceForm">
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="topic">topic:  </label>
					<input type="topic" name="topic" id="topic" value={
						this.state.topic || ''
					} onChange={ this.handleChange } />
				</div>

                <div>
					<label htmlFor="startTime">date:   </label>  
					<input type="datetime-local" name="startTime" id="startTime" value={
						this.state.startTime || ''
					} onChange={ this.handleChange } />
				</div>
                
    

                 <div>
					<label htmlFor="stimatedTime">EstimatedDuration</label>
					<input type="number" name="stimatedTime" id="stimatedTime" value={
						this.state.stimatedTime || ''
					} onChange={ this.handleChange } /> Minutes
				</div>
          
        <div>
        
                <select name="participants" onChange = { this.handleChange }>
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
      </div>
         )
       }
  }





  export default connect( ) (MakeConferenceForm)