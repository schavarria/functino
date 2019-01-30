import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AddChannels from './AddChannels'
import '../styles/SidePanel.css'

class SidePanel extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="sidepanelCon">
             <Link to='/newchannel'> Add Channels</Link>
            <ul>
              <li> <Link to='/default'> Default </Link> </li>
              <li> <Link to='/general'> Gerenal </Link> </li>
              <li> <Link to='/random'> Random </Link> </li>
            </ul>

            </div>
         )
    }
}
 
export default SidePanel