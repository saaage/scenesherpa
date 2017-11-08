import React, { Component } from 'react'
import axios from 'axios'

import Options from 'components/Options'

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

  handleChange = (e) => {
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

    const output = results.map(obj => (
      <p key={obj.id}>{obj.title}</p>
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
          <button>Go</button>
        </form>
        <Options show={this.state.showDropDown} options={output} />
      </div>
    )
  }
}

export default Search
