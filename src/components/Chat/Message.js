import React from 'react'
import { Row, Col, Tooltip } from 'react-bootstrap'

export default function MessageComponent({ message, isMine }) {
  if (!isMine) {
    return (
      <Row>
        <Col md={12}>
          <h6>{message.User.nickname}</h6>
          <div class="talk-bubble tri-right left-top">
            <div class="talktext">
              <p>{message.content}</p>
            </div>
          </div>
        </Col>
      </Row>
    )
  } else {
    return (
      <Row>
        <Col md={12}>
          <div class="talk-bubble pullright">
            <div class="talktext">
              <p>{message.content}</p>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}
