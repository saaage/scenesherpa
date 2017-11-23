import React from 'react'
import styled from 'styled-components'

import Search from 'containers/Search'


import SherpaLogo from 'components/SherpaLogo'

const Welcome = () => (
  <Layout>
    <h1 className="title">Scene Sherpa</h1>
    <SherpaLogo className="logo" color="#5B97BA" />
    <Search className="search" />
  </Layout>
)

const Layout = styled.div`
  display: grid;
  grid-template-columns: 2em auto 2em;
  grid-template-rows: 1fr 2fr 5fr;
  grid-template-areas: 
    ". header ."
    ". logo ."
    ". search .";
  justify-items: center;
  .logo {
    grid-area: logo;
  }
  .title {
    grid-area: header;
  }
  .search {
    grid-area: search;
    justify-self: stretch;
  }
  .options {
    grid-area: search;
  }
`

export default Welcome
