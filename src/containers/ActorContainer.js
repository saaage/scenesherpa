import React, { Component } from 'react'
import Actor from 'components/Actor'

class ActorContainer extends Component {
  state = {
    default: 'abc'
  }
  render() {
    return (
      <div>
        <h1>Actor Container</h1>
        <h2>{this.props.match.params.id}</h2>
        <Actor />
      </div>
    )
  }
}

export default ActorContainer
