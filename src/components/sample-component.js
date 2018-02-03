import React, { Component } from 'react';

class SampleComponent extends Component {
  render() {
    const {
      title,
      content
    } = this.props

    return (
      <section>
        <h1>{title}</h1>
        <p>{content}</p>
      </section>
    )
  }
};

export default SampleComponent;
