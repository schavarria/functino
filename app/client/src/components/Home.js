import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeACall, connectToSocketServer } from '../actions/chatActions'

class Home extends Component {
  componentDidMount() {
    makeACall()
  }
  
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>{this.props.chat}</p>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    chat: appState.chatReducer.chat
  }
}

export default connect(mapStateToProps)(Home)