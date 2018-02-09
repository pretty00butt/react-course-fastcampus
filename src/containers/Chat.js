import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import ChatComponent from '../components/Chat'
import MessagesActions from '../Actions/Messages'

class ChatContainer extends Component {
  state = {
    content: '',
    messages: [
      {
        User: {
          id: 1,
          username: 'the6thm0nth',
          nickname: '춘식',
        },
        content: '안녕하세요 ㅎㅎ',
      },
      {
        User: {
          id: 2,
          username: 'saem',
          nickname: 'Saem',
        },
        content: '네!',
      },
      {
        User: {
          id: 3,
          username: 'eddy',
          nickname: '지민킴',
        },
        content: '아 ㅏㅏㅏㅏㅏㅏㅏ',
      },
    ],
  }

  componentWillMount() {
    MessagesActions.toggleStatusOfMessagesView(true)
  }

  componentWillUnmount() {
    MessagesActions.toggleStatusOfMessagesView(false)
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
    state.messages.push({
      User: {
        id: 1,
        username: 'the6thm0nth',
        nickname: '춘식',
      },
      content: this.state.content,
    })
    state.content = ''
    this.setState(state)
  }

  render() {
    return [
      <Helmet>
        <title>채팅방</title>
      </Helmet>,
      <ChatComponent
        content={this.state.content}
        messages={this.state.messages}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />,
    ]
  }
}

export default ChatContainer
