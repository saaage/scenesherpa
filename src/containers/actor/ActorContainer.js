// container for /actor/:id

import React, { Component } from 'react'
import axios from 'axios'

import Actor from 'components/actor/Actor'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

class ActorContainer extends Component {
  state = {
    config: JSON.parse(localStorage.getItem('images')),
    profile: {},
    movies: {},
    tv: {},
    isLoading: true
  }

  componentDidMount() {
    this.getInfo()
  }

  componentWillReceiveProps(nextProps) {
    this.getInfo(nextProps.match.params.id)
  }

  getInfo = async (id = this.props.match.params.id) => {
    const profile = await axios.get(`${API_URL}/person/${id}?api_key=${API_KEY}&language=en-US`)
    const movies = await axios.get(`${API_URL}/person/${id}/movie_credits?api_key=${API_KEY}&language=en-us`)
    const tv = await axios.get(`${API_URL}/person/${id}/tv_credits?api_key=${API_KEY}&language=en-US`)
    this.setState(({
      profile: profile.data,
      movies: movies.data,
      tv: tv.data,
      isLoading: false
    }))
  }

  render() {
    if (this.state.isLoading) {
      return <h1>container making API call...</h1>
    }
    return (
      <div>
        <Actor id={this.props.match.params.id} {...this.state} />
      </div>

    ) 
  }
}

export default ActorContainer
