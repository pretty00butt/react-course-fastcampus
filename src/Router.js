import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'

import Navbar from './containers/Navbar'
import UsersBar from './containers/UsersBar'
import Home from './containers/Home'
import Chat from './containers/Chat'

/* Use components to define routes */
class RouterContainer extends Component {
  render() {
    const DefaultLayout = ({ component: Component, ...rest }) => (
      <div className="body">
        <Navbar />
        <Route
          {...rest}
          render={props => (
            <Grid>
              <Row>
                <Col md={8}>
                  <Component {...props} />
                </Col>
                <Col md={4}>
                  <UsersBar />
                </Col>
              </Row>
            </Grid>
          )}
        />
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
