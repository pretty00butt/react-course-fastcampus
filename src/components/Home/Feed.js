import React from 'react'
import { Panel } from 'react-bootstrap'

export default function FeedComponent({ feed, isMine }) {
  const { content, User, createdAt } = feed

  return (
    <Panel className="feed">
      <Panel.Heading>
        <Panel.Title componentClass="h3">
          {User.username} <span className="created-at">- {createdAt}</span>
        </Panel.Title>
      </Panel.Heading>
      <Panel.Body>{content}</Panel.Body>
    </Panel>
  )
}
