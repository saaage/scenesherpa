import React, { Component } from 'react'
import axios from 'axios'

import OptionsList from 'components/welcome/OptionsList'
import Option from 'components/welcome/Option'

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

    const options = results.map(obj => (
      <Option
        {...obj}
        key={obj.id}
      />
    ))

    return (
      <div>
        <h1>Welcome to Scene Sherpa</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={input => this.search = input}
            onChange={this.handleChange}
            placeholder="Search for..."
          />
          <button onClick={this.reminder}>Go</button>
        </form>
        <OptionsList show={this.state.showDropdown} options={options} />
      </div>
    )
  }
}

export default Search
