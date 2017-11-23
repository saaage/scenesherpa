// container for /actor/:id

import React, { Component } from 'react'
import axios from 'axios'
import Div from 'styled/Div'

import Actor from 'components/actor/Actor'
import Loader from 'styled/Loader'
import Spinner from 'components/svg/Spinner'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

class ActorContainer extends Component {
  state = {
    isLoading: true,
    error: false,
    config: JSON.parse(localStorage.getItem('images')),
    profile: {},
    movies: {},
    tv: {}
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
      const profile = await axios.get(`${API_URL}/person/${id}?api_key=${API_KEY}&language=en-US`)
      const movies = await axios.get(`${API_URL}/person/${id}/movie_credits?api_key=${API_KEY}&language=en-us`)
      const tv = await axios.get(`${API_URL}/person/${id}/tv_credits?api_key=${API_KEY}&language=en-US`)
      this.setState(({
        profile: profile.data,
        movies: movies.data,
        tv: tv.data,
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
    return (
      <Div>
        <Actor id={this.props.match.params.id} {...this.state} />
      </Div>
    )
  }
}

export default ActorContainer
