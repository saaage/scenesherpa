import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import MovieContainer from 'containers/movie/MovieContainer'
import TVContainer from 'containers/tv/TVContainer'
import Search from 'containers/welcome/Search'
import ActorContainer from 'containers/actor/ActorContainer'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

class App extends Component {
  componentDidMount() {
    const now = new Date()
    const configDate = localStorage.getItem('configDate')
    const daysElapsed = Math.ceil(((now - Date.parse(configDate)) / 8.64e7))
    if (configDate && daysElapsed >= 2) {
      this.getAPIConfig()
    } else if (!configDate) {
      this.getAPIConfig()
    }
  }

  getAPIConfig = () => {
    axios.get(`${API_URL}/configuration?api_key=${API_KEY}`)
      .then(({ data }) => {
        localStorage.setItem('images', JSON.stringify(data.images))
        localStorage.setItem('configDate', new Date())
      })
      .catch(e => console.log(e))
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/actor/:id" component={ActorContainer} />
        <Route path="/movie/:id" component={MovieContainer} />
        <Route path="/tv/:id" component={TVContainer} />
      </Switch>
    )
  }
}

export default App
