// allows user to select between Cast or Crew for a given movie

import React, { Component } from 'react'

import Cast from 'components/people/Cast'
import Crew from 'components/people/Crew'

class CastCrew extends Component {
  state = {
    selection: 'cast'
  }

  selectCast = (e) => {
    e.preventDefault()
    this.setState(({
      selection: 'cast'
    }))
  }

  selectCrew = (e) => {
    e.preventDefault()
    this.setState(({
      selection: 'crew'
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.selectCast}>Cast</button>
        <button onClick={this.selectCrew}>Crew</button>
        {
          this.state.selection === 'cast' ?
            <Cast
              name={this.props.title || this.props.name}
              cast={this.props.credits.cast}
            /> :
            <Crew
              name={this.props.title || this.props.name}
              crew={this.props.credits.crew}
            >
              CREW
            </Crew>
        }
      </div>
    )
  }
}

export default CastCrew
