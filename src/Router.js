import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './containers/Navbar'
import Home from './containers/Home'
import Chat from './containers/Chat'

/* Use components to define routes */
class RouterContainer extends Component {
  render() {
    const DefaultLayout = ({ component: Component, ...rest }) => (
      <div className="body">
        <Navbar />
        <Route {...rest} render={props => <Component {...props} />} />
      </div>
    )

    return (
      <Router>
        <Switch>
          <DefaultLayout exact path="/" component={Home} />
          <DefaultLayout exact path="/chat" component={Chat} />
        </Switch>
      </Router>
    )
  }
}

export default RouterContainer
