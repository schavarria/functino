import React, { Component } from 'react'
import { assignUsername } from '../actions/chatActions'

import '../styles/signinStyles.css'



class Signin extends Component {
     state = {
         username:''
     }


    handleSubmit = e => {
        e.preventDefault()
        assignUsername(this.state.username).then(()=> {
            this.props.history.push('/default')
        })
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      } 

  render() {
    return (
        <div className="signinCon">
            <div className="titleCon">
                <p className="title">Functino Me</p> 
                <img className="icon" src="https://www.freeiconspng.com/uploads/live-chat-icon-18.png" width="60" height="60" alt="Live Chat Icons No Attribution" />
            </div>
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <input className="usernameBar" type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter a Username"/> <br/>
                <button className="signinButton" type="submit">Sign In</button>
            </form>
        </div>
    )
  }
}

export default Signin