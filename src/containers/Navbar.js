import React, { Component } from 'react'
import { Container } from 'flux/utils'

import MessagesStore from '../Stores/Messages'
import Navbar from '../components/Navbar'

class NavbarContainer extends Component {
  render() {
    return <Navbar numberOfMessages={this.state.numberOfMessages} />
  }
}

NavbarContainer.getStores = () => [MessagesStore]
NavbarContainer.calculateState = prevState => ({
  numberOfMessages: MessagesStore.getState().numberOfMessages,
})

export default Container.create(NavbarContainer)
