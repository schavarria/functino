import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import store from '../store'

import Home from './Home'
import Signin from './Signin'
import AddChannels from './AddChannels';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={Signin} />
              <Route path="/newchannel" component={AddChannels} />
              <Route path="/:roomname" component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
