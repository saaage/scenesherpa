import React, { Component } from 'react'

class MovieContainer extends Component {
  state = {
    default: 'abc'
  }
  render() {
    return (
      <div>
        <h1>Movie Container</h1>
        <h2>{this.props.match.params.id}</h2>
      </div>
    )
  }
}

export default MovieContainer
