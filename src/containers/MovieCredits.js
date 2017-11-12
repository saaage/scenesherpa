import React, { Component } from 'react'
import axios from 'axios'

import MovieListItem from 'components/MovieListItem'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

class MovieCredits extends Component {
  state = {
    isLoading: true,
    credits: {}
  }

  componentDidMount() {
    this.getCredits()
  }

  getCredits = () => {
    axios.get(`${API_URL}/person/${this.props.id}/movie_credits?api_key=${API_KEY}&language=en-US`)
      .then(({ data }) => {
        this.setState({
          credits: data,
          isLoading: false
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return <h3>Loading credits...</h3>
    }
    const credits = this.state.credits.cast.map((m) => {
      return <MovieListItem key={m.id} {...m} />
    })
    return <ul>{credits}</ul>
  }
}

export default MovieCredits
