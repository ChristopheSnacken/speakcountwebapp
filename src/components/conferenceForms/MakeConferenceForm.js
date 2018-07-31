import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import './MakeConferenceForm.css'
import { Link } from 'react-router-dom'

class MakeConferenceForm extends PureComponent {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({[name]: value})
  }

  render() {
    return (<div className="MakeConferenceForm">

      <form onSubmit={this.handleSubmit} className='form1'>

        <table className="table">
          <tr>
            <td className="logos">Create a session
            </td>
          </tr>
          <tr>
            <td className="sublogos">All fields are required
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="topic">Session name:
              </label>
            </td>
            <td><input className="inputForm" type="topic" name="topic" id="topic" value={this.state.topic || ''
} onChange={this.handleChange}/></td>

          </tr>
          <tr>
            <td>
              <label htmlFor="startTime">Date & Time:
              </label>
            </td>
            <td><input className="inputForm" type="datetime-local" name="startTime" id="startTime" value={this.state.startTime || ''
} onChange={this.handleChange}/>

</td>

          </tr>
          <tr>
            <td>
              <label htmlFor="stimatedTime">Estimated duration:</label>
            </td>
            <td><input className="no-spinners" type="number" name="stimatedTime" id="stimatedTime" value={this.state.stimatedTime || ''
} onChange={this.handleChange}/> minutes
            </td>

          </tr>
          <tr>
            <td>
              <label htmlFor="stimatedTime">Participants:</label>
            </td>
            <td>
              <select className="inputForm" name="participants" onChange={this.handleChange}>
                <option value="">

                </option>
                <option value="4">
                  4
                </option>
                <option value="5">
                  5
                </option>
                <option value="6">
                  6
                </option>
                <option value="7">
                  7
                </option>
                <option value="8">
                  8
                </option>
                <option value="9">
                  9
                </option>
                <option value="10">
                  10
                </option>
              </select>
            </td>

          </tr>
        </table>


        <button type="submit" className="submit" >Save</button>
        <Link to={"/start"}><button type="submit" className="submit2">Back</button></Link>

      </form>
    </div>)
  }
}

export default connect()(MakeConferenceForm)
