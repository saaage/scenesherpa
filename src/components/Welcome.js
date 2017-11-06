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

  hinter = () => {
    let input = this.state.query
    let { hugeList } = this
    const min_characters = 0

    if (input.value.length < min_characters) {
      return null
    } else {
      // code here to exit any pending API calls
      // if async fetch function is resolved
        // clear any items currently in datalist
        // for each item in response, create an option element
          // attach the option to the datalist element
    }
  }
 
  render() {
    return (
      <div>
        <h1>Welcome to Scene Sherpa</h1>
        <form>
          <input
            type="text"
            ref={input => this.search = input}
            onChange={this.handleChange}
          />
          <datalist ref={list => this.hugeList = list} />
        </form>
        <button onClick={this.logState}>Search</button>
      </div>
    )
  }
}

export default Welcome
