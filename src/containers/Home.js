import React, { Component } from 'react'
import HomeComponent from '../components/Home'

class HomeContainer extends Component {
  state = {
    content: '',
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

  render() {
    return <HomeComponent handleChange={this.handleChange} />
  }
}

export default HomeContainer
