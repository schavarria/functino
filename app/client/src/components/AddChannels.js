import React, { Component } from 'react';
import { addChannel } from '../actions/chatActions'

class AddChannels extends Component {
    state = {
        channelname:''
    }


   handleSubmit = e => {
       e.preventDefault()
       addChannel(this.state.channelname)
       this.setState({
           channelname: ''
       })
       this.props.history.goBack()
   }

   handleChange = e => {
       this.setState({
         [e.target.name]: e.target.value
       })
     } 

    render() { 
        return ( 
            <div>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <input className="channelnameBar" type="text" name="channelname" value={this.state.channelname} onChange={this.handleChange} placeholder="Enter a Channel Name"/> <br/>
                    <button className="subButton" type="submit">Submit</button>
                </form>
            </div>
         )
    }
}
 
export default AddChannels


