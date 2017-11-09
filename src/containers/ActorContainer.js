import React, { Component } from 'react'
import axios from 'axios'

import Actor from 'components/Actor'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'
const POSTER_PATH = 'http//image.tmdb.org/t/p/w154'

class ActorContainer extends Component {
  state = {
    actor: {}
  }

  componentDidMount() {
    axios.get(`${API_URL}/person/${this.props.match
      .params.id}?api_key=${API_KEY}&language=en-US`)
      .then(({ data }) => this.setState(({ actor: data })))
      .catch(e => console.log(e))
  }
  render() {
    return (
      <div>
        <h1>Actor Container</h1>
        <Actor {...this.state.actor} />
      </div>
    )
  }
}

export default ActorContainer
