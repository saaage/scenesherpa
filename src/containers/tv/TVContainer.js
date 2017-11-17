// container for /tv/:id

import React, { Component } from 'react'
import axios from 'axios'

import TVShow from 'components/tv/TVShow'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

class TVContainer extends Component {
  state = {
    isLoading: true,
    id: this.props.match.params.id,
    details: {},
    credits: {},
    similar: {},
    videos: {}
  }

  componentDidMount() {
    this.getInfo()
  }

  componentWillReceiveProps(nextProps) {
    this.setState(({
      isLoading: true
    }))
    this.getInfo(nextProps.match.params.id)
  }

  getInfo = async (id = this.props.match.params.id) => {
    const details =
      await
      axios.get(`${API_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`)
    const credits =
      await
      axios.get(`${API_URL}/tv/${id}/credits?api_key=${API_KEY}&language=en-US`)
    const similar =
      await
      axios.get(`${API_URL}/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    const videos =
      await
      axios.get(`${API_URL}/tv/${id}/videos?api_key=${API_KEY}&language=en-US`)
    this.setState(({
      details: details.data,
      credits: credits.data,
      similar: similar.data,
      videos: videos.data,
      isLoading: false
    }))
  }
  render() {
    if (this.state.isLoading) {
      return <h1>container making API call...</h1>
    }
    return (
      <div>
        <TVShow {...this.state} />
      </div>
    )
  }
}

export default TVContainer
