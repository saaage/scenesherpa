import React, { Component } from 'react'
import axios from 'axios'

import Actor from 'components/Actor'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

class ActorContainer extends Component {
  state = {
    actor: {},
    images: JSON.parse(localStorage.getItem('images'))
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
        <Actor {...this.state} />
      </div>
    )
  }
}

export default ActorContainer
