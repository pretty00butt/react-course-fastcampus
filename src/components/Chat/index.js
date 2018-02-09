import React, { Component } from 'react'
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap'
import * as ReactDOM from 'react-dom'
import MessageComponent from './Message'

import './style.css'

class ChatComponent extends Component {
  scrollToBottom = () => {
    const { messages } = this.refs
    const scrollHeight = messages.scrollHeight
    const height = messages.clientHeight
    const maxScrollTop = scrollHeight //  - height;
    ReactDOM.findDOMNode(messages).scrollTop = scrollHeight
  }

  handleSubmit = e => {
    this.scrollToBottom()
    this.props.handleSubmit(e)
  }

  render() {
    const { content, messages, handleChange } = this.props

    const MessageRows = messages.map((message, index) => (
      <MessageComponent
        key={index}
        message={message}
        isMine={message.User.id === 1}
      />
    ))

    return (
      <section id="chat">
        <div className="messages" ref="messages">
          {MessageRows}
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                name="content"
                onChange={handleChange}
                value={content}
              />
              <InputGroup.Button>
                <Button type="submit">보내기</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </form>
      </section>
    )
  }
}

export default ChatComponent
