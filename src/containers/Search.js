import React, { Component } from 'react'
import axios from 'axios'

import OptionsList from 'components/welcome/OptionsList'
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

  testFunction = () => {
    console.log('resize')
  }

  hideDropdown = () => {
    this.setState(({
      showDropdown: false
    }))
    this.search.value = ''
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

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const { results } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            innerRef={input => this.search = input}
            onChange={this.handleChange}
            placeholder="Find movie, tv show, actor/actress..."
          />
          <button onClick={this.reminder}>Go</button>
          <OptionsList
            show={this.state.showDropdown}
            hide={this.hideDropdown}
            options={results}
          />
        </form>
      </div>
    )
  }
}

export default Search
