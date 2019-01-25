import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addMessage} from '../actions/chatActions'

class Home extends Component {
state = {
  message:''
}

handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = e => {
  e.preventDefault()
  addMessage(this.state.message)
}
  
  render() {
    return (
      <div>
        <form autoComplete="off" onSubmit={this.handlSubmit}>
          <input type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
        <div id="room">
        {this.props.messages.map(message =>(
          <p>{message.message}</p>
        ))}

        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    message: appState.chatReducer.message
  }
}

export default connect(mapStateToProps)(Home)