import React, { Component } from 'react'
import axios from 'axios'

import Actor from 'components/Actor'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

class ActorContainer extends Component {
  state = {
    id: this.props.match.params.id,
    images: JSON.parse(localStorage.getItem('images')),
    profile: {},
    movies: {},
    tv: {},
    isLoading: true
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const profile = await axios.get(`${API_URL}/person/${this.state.id}?api_key=${API_KEY}&language=en-US`)
    const movies = await axios.get(`${API_URL}/person/${this.state.id}/movie_credits?api_key=${API_KEY}&language=en-us`)
    const tv = await axios.get(`${API_URL}/person/${this.state.id}/tv_credits?api_key=${API_KEY}&language=en-US`)
    this.setState(({
      profile: profile.data,
      movies: movies.data,
      tv: tv.data,
      isLoading: false
    }))
  }

  render() {
    if (this.state.isLoading) {
      return <h1>loading!</h1>
    }
    return <Actor {...this.state} />
  }
}

export default ActorContainer
