import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Badge,
} from 'react-bootstrap'

export default class NavbarComponent extends Component {
  render() {
    const { numberOfMessages } = this.props

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">얼굴책</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem>
            <Link to="/chat">Message</Link>
            {numberOfMessages ? (
              <Badge pullRight>{numberOfMessages}</Badge>
            ) : (
              ''
            )}
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
