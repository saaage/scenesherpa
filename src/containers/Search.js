import React, { Component } from 'react'
import axios from 'axios'

import OptionsList from 'components/welcome/OptionsList'
import Input from 'styled/Input'
import Button from 'styled/Button'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

class Search extends Component {
  state = {
    query: '',
    results: [],
    showDropdown: false,
    showButton: false
  }

  getResults = () => {
    axios.get(`${API_URL}/search/multi?api_key=${API_KEY}&query=${this.state.query}&page=1`)
      .then(({ data }) => this.setState(({ results: data.results })))
      .catch(e => console.log(e))
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

  hideButton = () => {
    this.setState(({
      showButton: false
    }))
  }

  showButton = () => {
    this.setState(({
      showButton: true
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

  handleMouseDown = (e) => {
    e.preventDefault()
  }

  handleMouseUp = () => {
    this.search.blur()
  }

  render() {
    const { results } = this.state
    return (
      <div className={this.props.className}>
        <form style={{width: '100%'}} onSubmit={this.handleSubmit} onBlur={this.hideDropdown}>
          <Input
            type="text"
            innerRef={input => this.search = input}
            onChange={this.handleChange}
            onFocus={this.showButton}
            onBlur={this.hideButton}
            placeholder="Find movie, tv show, actor/actress..."
          />
          <OptionsList
            className="options"
            show={this.state.showDropdown}
            hide={this.hideDropdown}
            stopBlur={this.handleMouseDown}
            mouseUp={this.handleMouseUp}
            options={results}
          />
        </form>
      </div>
    )
  }
}

export default Search
