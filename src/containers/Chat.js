import React, { Component } from 'react'
import ChatComponent from '../components/Chat'
import MessagesActions from '../Actions/Messages'

class ChatContainer extends Component {
  componentWillMount() {
    MessagesActions.toggleStatusOfMessagesView(true)
  }

  componentWillUnmount() {
    MessagesActions.toggleStatusOfMessagesView(false)
  }

  render() {
    return <ChatComponent />
  }
}

export default ChatContainer
