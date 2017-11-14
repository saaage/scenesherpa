// allows user to select between Cast or Crew for a given movie

import React, { Component } from 'react'

import Cast from 'components/people/Cast'
import Crew from 'components/people/Crew'
import ScreenSizedDiv from 'styled/ScreenSizedDiv'

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
      <ScreenSizedDiv>
        <button onClick={this.selectCast}>Cast</button>
        <button onClick={this.selectCrew}>Crew</button>
        {
          this.state.selection === 'cast' ?
            <Cast cast={this.props.credits.cast} /> :
            <Crew crew={this.props.credits.crew}>CREW</Crew>
        }
      </ScreenSizedDiv>
    )
  }
}

export default CastCrew
