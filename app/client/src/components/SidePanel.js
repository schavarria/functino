import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import AddChannels from './AddChannels'
import '../styles/SidePanel.css'

class SidePanel extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="sidepanelCon">
             <Link className="addchannel" to='/newchannel'> Add Channels</Link>
            <ul>
                {this.props.channels.map(channel => (
                    <li>
                        <Link className="channelNames" to={`/${channel}`}> {channel} </Link>
                    </li>
                ))}
            </ul>

            </div>
         )
    }
}

function mapStateToProps(appState) {
    console.log(appState)
    return {
      channels: appState.chatReducer.channels
    }
  }
  
  export default connect(mapStateToProps)(SidePanel)
 
