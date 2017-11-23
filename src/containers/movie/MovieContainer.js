// container for /movie/:id

import React, { Component } from 'react'
import axios from 'axios'

import Movie from 'components/movie/Movie'
import Spinner from 'components/svg/Spinner'
import Loader from 'styled/Loader'
import Div from 'styled/Div'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

class MovieContainer extends Component {
  state = {
    isLoading: true,
    config: JSON.parse(localStorage.getItem('images')),
    details: {},
    credits: {},
    videos: {},
    similar: {}
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
    const details = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    const credits = await axios.get(`${API_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    const videos = await axios.get(`${API_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    const similar = await axios.get(`${API_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    this.setState(({
      details: details.data,
      credits: credits.data,
      videos: videos.data,
      similar: similar.data,
      isLoading: false
    }))
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Loader>
          <div>
            <Spinner />
          </div>
        </Loader>
      )
    }
    return <Movie {...this.state} />
  }
}

export default MovieContainer
