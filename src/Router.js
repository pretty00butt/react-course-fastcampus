import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Chat from './containers/Chat';

/* Use components to define routes */
class RouterContainer extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Router>
    );
  }
}

export default RouterContainer;
