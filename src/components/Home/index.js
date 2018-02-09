import React, { Component } from 'react'
import { Grid, Col, Row, FormGroup, FormControl, Button } from 'react-bootstrap'
import { format } from 'date-fns'
import FeedComponent from './Feed'

import './style.css'

export default function HomeComponent({
  feeds,
  content,
  handleChange,
  handleSubmit,
}) {
  const FeedRows = feeds.map((feed, index) => (
    <FeedComponent key={index} feed={feed} isMine={feed.User.id === 1} />
  ))

  return (
    <section>
      <Row>
        <Col md={12}>
          <form onSubmit={handleSubmit}>
            <FormGroup controlId="formControlsTextarea">
              <FormControl
                componentClass="textarea"
                placeholder="What's on your mind, 춘식?"
                name="content"
                value={content}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Button type="submit">글쓰기</Button>
            </FormGroup>
          </form>
        </Col>
      </Row>
      <Row>
        <Col md={12}>{FeedRows}</Col>
      </Row>
    </section>
  )
}
