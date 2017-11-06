import React, { Component } from 'react'

class Welcome extends Component {
  state = {
    query: ''
  }

  handleChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  logState = () => {
    console.log(this.state.query)
  }

  render() {
    return (
      <div>
        <h1>Welcome to Scene Sherpa</h1>
        <input
          type="text"
          autoComplete="on"
          ref={input => this.search = input}
          onChange={this.handleChange}
        />
        <button onClick={this.logState}>Search</button>
      </div>
    )
  }
}

export default Welcome
