import React, { Component } from 'react'
import axios from 'axios'

import OptionsList from 'components/OptionsList'
import Option from 'components/Option'

const { API_KEY } = process.env
const API_URL = 'http://api.themoviedb.org/3'

class Search extends Component {
  state = {
    query: '',
    results: [],
    showDropDown: false
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
      showDropDown: false
    }))
  }

  showDropDown = () => {
    this.setState(({
      showDropDown: true
    }))
  }

  handleChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query) {
        this.showDropDown()
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
        <OptionsList show={this.state.showDropDown} options={options} />
      </div>
    )
  }
}

export default Search
