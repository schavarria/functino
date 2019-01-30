import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addMessage} from '../actions/chatActions'

import '../styles/homeStyles.css'
import SidePanel from './SidePanel'
class Home extends Component {
state = {
  message:''
}

componentWillMount(){
  if (this.props.username === ''){
    this.props.history.push('/')
  }
}
componentWillUpdate() {
  //checks to see if the ref at messages has been scrolled all the way to the bottom
  var node = this.refs.messages
  this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight
}
componentDidUpdate() {
  //if we're already at the bottom, scroll to the bottom, otherwise, don't
  //preserves where the user is currently scrolled to
  if (this.shouldScrollBottom) {
    var node = this.refs.messages
    node.scrollTop = node.scrollHeight
  }
}

handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = e => {
  e.preventDefault()
  if(this.state.message !== "" && this.state.message !== " ") {
    addMessage({
      message: this.state.message,
      roomname: this.props.match.params.roomname
    })
  } else {
    addMessage({
      message: '',
      roomname: this.props.match.params.roomname
    })
  }
  this.setState({
    message: ''
  })
}
  
  render() {
    return (
      <div className="mainCon">
        <SidePanel />
        <div id='roomWrap'>
          <div className="chatCon" ref='messages'>
            {this.props.messages.map((message, i) => (
                  <p key={message.roomname + '-message-' + i}>
                    <span className="roomUsername">{this.props.username}</span>: {message.message}
                  </p>
                ))}
          </div>
        </div>
        <div className="sendMessageCon">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input className="messageBar" type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState, ownProps) {
  const roomname = ownProps.match.params.roomname
  console.log(appState)
  return {
    messages: appState.chatReducer.messages.filter(message => message.roomname == roomname),
    history: ownProps.history,
    username: appState.chatReducer.username
  }
}

export default connect(mapStateToProps)(Home)