import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

export default class NavbarComponent extends Component {
  render() {
    const { users } = this.props

    const UserRows = users.map((user, index) => (
      <li>
        <h4>{user.username}</h4>
        <p>{user.nickname}</p>
      </li>
    ))

    return (
      <section>
        <h3>사용자 목록</h3>
        <ul>{UserRows}</ul>
      </section>
    )
  }
}
