import React, { Component } from 'react'

class Biography extends Component {
  state = {
    collapse: true
  }

  expandBio = () => {
    this.setState(({
      collapse: false
    }))
  }

  collapseBio = () => {
    this.setState(({
      collapse: true
    }))
  }

  render() {
    const preview = this.props.bio.slice(0, 140)
    if (this.state.collapse) {
      return (
        <div>
          <p>{preview}</p>
          <button onClick={this.expandBio}>Full Bio</button>
        </div>
      )
    }
    return (
      <div>
        <p>{this.props.bio}</p>
        <button onClick={this.collapseBio}>Close Bio</button>
      </div>
    )
  }
}

export default Biography
