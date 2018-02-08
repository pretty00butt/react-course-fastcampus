import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-bootstrap'
import FeedComponent from './Feed'

import './style.css'

class HomeComponent extends Component {
  state = {
    feeds: [
      {
        id: 1,
        content: '안녕하세요. 페스트 캠퍼스 강의용으로 만든 SNS 입니다.',
        User: {
          id: 1,
          username: 'the6thm0nth',
          nickname: '춘식',
        },
        createdAt: '2018-02-08 11:12:00',
      },
      {
        id: 2,
        content: '안녕하세요. 페스트 캠퍼스 강의용으로 만든 SNS 입니다.',
        User: {
          id: 2,
          username: 'saem',
          nickname: 'Saem',
        },
        createdAt: '2018-02-08 11:12:32',
      },
      {
        id: 3,
        content: '안녕하세요. 페스트 캠퍼스 강의용으로 만든 SNS 입니다.',
        User: {
          id: 3,
          username: 'eddy',
          nickname: '지민킴',
        },
        createdAt: '2018-02-08 11:13:00',
      },
      {
        id: 4,
        content: '안녕하세요. 페스트 캠퍼스 강의용으로 만든 SNS 입니다.',
        User: {
          id: 1,
          username: 'the6thm0nth',
          nickname: '춘식',
        },
        createdAt: '2018-02-08 11:14:00',
      },
    ],
  }

  render() {
    const { feeds } = this.state

    const FeedRows = feeds.map((feed, index) => (
      <FeedComponent key={index} feed={feed} isMine={feed.User.id === 1} />
    ))

    return (
      <section>
        <h1>나의 피드 목록</h1>

        <Row>
          <Col md={12}>{FeedRows}</Col>
        </Row>
      </section>
    )
  }
}

export default HomeComponent
