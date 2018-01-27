import React from 'react'
import styled from 'styled-components'

import Search from 'containers/Search'

import SherpaLogo from 'components/SherpaLogo'

const Welcome = () => (
  <Layout>
    <h2 className="title">Scene Sherpa</h2>
    <SherpaLogo
      className="logo"
      color="#5B97BA"
      width="117"
      height="225"
    />
    <Search className="search" />
  </Layout>
)

// Layout styles are only concerned with positioning of the elements
//  inside. Layout should not be modifying the styles of the components
//  that live inside.
const Layout = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    color: #5B97BA;
    margin: 1em 1em 2em .5em;
    font-family: sans-serif;
    font-weight: 600;
  }

  .logo {
    align-self: center;
    margin-bottom: 1em;
    margin-top: 3em;
  }

  .search {
    align-items: center;
    align-self: center;
    border-radius: 5px;
    border: 1px solid gray;
    display: flex;
    min-height: 40px;
    width: 97vw;

    form {
      margin: 0 0 0 0;
    }
  }
`

export default Welcome
