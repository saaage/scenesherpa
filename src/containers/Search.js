import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import OptionsList from 'components/welcome/OptionsList'
import Input from 'styled/Input'
import SearchIcon from 'styled/SearchIcon'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

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
      if (this.state.query && this.state.query.length > 1) {
        this.showDropdown()
        if (this.state.query.length % 2 === 0) {
          this.getResults()
        }
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
      <SearchStyled className={this.props.className}>
        <form
          className="search__form"
          onSubmit={this.handleSubmit}
          onBlur={this.hideDropdown}
        >
          <div className="inputSearch__container">
            <div className="input__container">
              <Input
                className="input"
                type="text"
                innerRef={input => this.search = input}
                onChange={this.handleChange}
                onFocus={this.showButton}
                onBlur={this.hideButton}
                placeholder=" find a movie title, actor, etc..."
              />
            </div>
            <SearchIcon
              className="searchIcon"
              color="#ededed"
            />
          </div>
          <OptionsList
            className="options"
            show={this.state.showDropdown}
            hide={this.hideDropdown}
            stopBlur={this.handleMouseDown}
            mouseUp={this.handleMouseUp}
            options={results}
          />
        </form>
      </SearchStyled>
    )
  }
}

const SearchStyled = styled.div`
  align-self: center;
  border-radius: 3px;
  width: 97vw;

  .input__container {
    border: 1px solid lightgray;
    border-radius: 3px 0 0 0;
    border-right: 0;
    display: flex;
    flex: 1;
  }

  .input {
    flex: 1;
    min-height: 40px;
  }

  .input::placeholder {
    color: #9e9e9e;
  }

  .searchIcon {
    border: 1px solid lightgray;
    border-left: none;
    border-radius: 0 3px 0 0;
    align-self: auto;
    margin: 0;
  }

  .search__form {
    margin: 0;
    min-height: 40px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .inputSearch__container {
    display: flex;
    width: 100%;
  }
`

export default Search
