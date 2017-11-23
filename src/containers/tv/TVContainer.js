// container for /tv/:id

import React, { Component } from 'react'
import axios from 'axios'

import TVShow from 'components/tv/TVShow'
import Loader from 'styled/Loader'
import Spinner from 'components/svg/Spinner'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

class TVContainer extends Component {
  state = {
    isLoading: true,
    error: false,
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
    try {
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
    } catch (err) {
      this.setState(({
        error: true,
        isLoading: false
      }))
      console.log(err)
    }
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
    } else if (this.state.error) {
      return <h2 style={{ marginLeft: '1em' }}>...uh oh! something went wrong!!</h2>
    }
    return <TVShow {...this.state} />
  }
}

export default TVContainer
