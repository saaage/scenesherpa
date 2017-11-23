// provides user an option to request an actor's TV Shows or Movies

import React, { Component } from 'react'
import MovieCredits from 'containers/movie/MovieCredits'
import TVCredits from 'containers/tv/TVCredits'

class ActorMedia extends Component {
  state = {
    mediaSelected: 'movies'
  }

  selectMovies = (e) => {
    e.preventDefault()
    this.setState(({
      mediaSelected: 'movies'
    }))
  }

  selectTV = (e) => {
    e.preventDefault()
    this.setState(({
      mediaSelected: 'tv shows'
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.selectMovies}>Movies</button>
        <button onClick={this.selectTV}>TV Shows</button>
        {
          this.state.mediaSelected === 'movies' ?
            <MovieCredits id={this.props.id} movies={this.props.movies} name={this.props.name} /> :
            <TVCredits id={this.props.id} tv={this.props.tv} name={this.props.name} />
        }
      </div>
    )
  }
}

export default ActorMedia
