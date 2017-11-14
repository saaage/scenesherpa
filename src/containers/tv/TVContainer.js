// container for /tv/:id

import React, { Component } from 'react'

class TVContainer extends Component {
  state = {
    default: 'abc'
  }
  render() {
    return (
      <div>
        <h1>TV Show Container</h1>
        <h2>{this.props.match.params.id}</h2>
      </div>
    )
  }
}

export default TVContainer
