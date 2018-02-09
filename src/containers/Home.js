import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { format } from 'date-fns'
import HomeComponent from '../components/Home'

class HomeContainer extends Component {
  state = {
    content: '',
    feeds: [
      {
        id: 1,
        content: '안녕하세요. 페스트 캠퍼스 강의용으로 만든 SNS 입니다.',
        User: {
          id: 1,
          username: 'the6thm0nth',
          nickname: '춘식',
        },
        createdAt: '2018-02-09 11:12:00',
      },
      {
        id: 2,
        content: '안녕하세요. 페스트 캠퍼스 강의용으로 만든 SNS 입니다.',
        User: {
          id: 2,
          username: 'saem',
          nickname: 'Saem',
        },
        createdAt: '2018-02-08 15:12:32',
      },
      {
        id: 3,
        content: '안녕하세요. 페스트 캠퍼스 강의용으로 만든 SNS 입니다.',
        User: {
          id: 3,
          username: 'eddy',
          nickname: '지민킴',
        },
        createdAt: '2018-02-08 11:14:00',
      },
      {
        id: 4,
        content: '안녕하세요. 페스트 캠퍼스 강의용으로 만든 SNS 입니다.',
        User: {
          id: 1,
          username: 'the6thm0nth',
          nickname: '춘식',
        },
        createdAt: '2018-02-08 11:10:00',
      },
    ],
  }

  handleChange = e => {
    const state = { ...this.state }

    switch (e.target.name) {
      default:
        state[e.target.name] = e.target.value
        break
    }

    this.setState(state)
  }

  handleSubmit = e => {
    e.preventDefault()
    const state = { ...this.state }
    state.feeds.unshift({
      content: this.state.content,
      User: {
        id: 1,
        username: 'the6thm0nth',
        nickname: '춘식',
      },
      createdAt: format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    })
    state.content = ''
    this.setState(state)
  }

  render() {
    return [
      <Helmet>
        <title>피드 목록</title>
      </Helmet>,
      <HomeComponent
        feeds={this.state.feeds}
        content={this.state.content}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />,
    ]
  }
}

export default HomeContainer
