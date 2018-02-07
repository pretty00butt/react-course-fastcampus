import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

class HomeComponent extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={8}>
            <h1>나의 피드 목록</h1>
          </Col>
          <Col md={4}>
            <h3>회원 목록</h3>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default HomeComponent
