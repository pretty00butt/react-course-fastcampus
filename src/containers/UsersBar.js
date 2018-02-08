import React, { Component } from 'react'
import UsersBar from '../components/UsersBar'

export default class UsersBarContainer extends Component {
  state = {
    users: [
      {
        id: 1,
        username: 'the6thm0nth',
        nickname: '춘식',
      },
      {
        id: 2,
        username: 'saem',
        nickname: 'Saem',
      },
      {
        id: 3,
        username: 'eddy',
        nickname: '지민킴',
      },
    ],
  }

  render() {
    return <UsersBar users={this.state.users} />
  }
}
