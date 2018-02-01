import React from 'react'
import styled from 'styled-components'

import Search from 'containers/Search'
import Footer from 'components/footer/Footer'

import SherpaLogo from 'components/SherpaLogo'

const Welcome = () => (
  <WelcomeLayout>
    <SherpaLogo
      className="logo"
      color="#5B97BA"
      width="57"
      height="110"
    />
    <h1 className="title">Scene Sherpa</h1>
    <p className="tagline">Tell us what you're looking for...</p>
    <Search />
    <div className="footer__div">
      <Footer className="footer" />
    </div>
  </WelcomeLayout>
)

// Layout styles are only concerned with positioning of the elements
//  inside. Layout should not be modifying the styles of the components
//  that live inside.
const WelcomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 1.5rem;

  .footer__div {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 2rem;
  }

  .title {
    color: #5B97BA;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    font-family: sans-serif;
    font-weight: 600;
  }

  .tagline {
    color: #5B97BA;
    font-family: 'Open Sans';
    font-size: 1.4rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
  }

  .logo {
    align-self: center;
    margin-bottom: 1em;
    margin-top: 3em;
  }
`

export default Welcome
