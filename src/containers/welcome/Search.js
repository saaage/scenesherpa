import React, { Component } from 'react'
import axios from 'axios'

import OptionsList from 'components/welcome/OptionsList'
import Option from 'components/welcome/Option'
import Input from 'styled/Input'

const { API_KEY } = process.env
const API_URL = 'http://api.themoviedb.org/3'

class Search extends Component {
  state = {
    query: '',
    results: [],
    showDropdown: false
  }

  getResults = () => {
    axios.get(`${API_URL}/search/multi?api_key=${API_KEY}&query=${this.state.query}&page=1`)
      .then(({ data }) => this.setState(({ results: data.results })))
      .catch(e => console.log(e))
  }

  reminder = () => {
    console.log('make a results page')
  }

  hideDropdown = () => {
    this.setState(({
      showDropdown: false
    }))
  }

  showDropdown = () => {
    this.setState(({
      showDropdown: true
    }))
  }

  handleChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query) {
        this.showDropdown()
        this.getResults()
      } else if (!this.state.query) {
        this.hideDropdown()
      }
    })
  }

  handleSubmit = e => e.preventDefault()

  render() {
    const { results } = this.state
    const ids = []
    const options = results.map((obj) => {
      if (ids.indexOf(obj.id) === -1) {
        ids.push(obj.id)
        return (
          <Option
            {...obj}
            key={obj.id}
          />
        )
      }
      return null
    })

    return (
      <div>
        <h1>Scene Sherpa</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            innerRef={input => this.search = input}
            onChange={this.handleChange}
            placeholder="Find movie, tv show, actor/actress..."
          />
          <button onClick={this.reminder}>Go</button>
        </form>
        <OptionsList show={this.state.showDropdown} options={options} />
      </div>
    )
  }
}

export default Search
