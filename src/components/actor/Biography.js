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
    if (window.pageYOffset > 390) {
      window.scrollTo(0, 480)
      // when bio collapses the window scrolls to position where the first media item at the top of
      //  the screen
    }
  }

  render() {
    let preview = null
    const { bio } = this.props
    if (bio.length > 140) {
      preview = bio.slice(0, 140)
    }
    if (bio.length <= 140) {
      return (
        <div>
          <p>{bio}</p>
        </div>
      )
    } else if (this.state.collapse && preview) {
      return (
        <div>
          <p>{preview}...</p>
          <button onClick={this.expandBio}>Show Full Bio</button>
        </div>
      )
    }
    return (
      <div>
        <p>{this.props.bio}</p>
        <button onClick={this.collapseBio}>Collapse Bio</button>
      </div>
    )
  }
}

export default Biography
