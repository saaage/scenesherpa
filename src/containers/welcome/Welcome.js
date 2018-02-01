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
    />
    <h1 className="title">Scene Sherpa</h1>
    <p className="tagline">Tell us what you're looking for...</p>
    <Search className="search__styles--override" />
    <div className="footer__div">
      <Footer className="footer" />
    </div>
  </WelcomeLayout>
)

// Layout styles are mainly concerned with positioning of the elements
//  inside. May also modify height and width to accomodate different
//  screen sizes.
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
    margin-bottom: 1rem;
    margin-top: 2.5rem;
    width: 78px;
    height: 150px;
  }

  // ipad (portrait)
  @media only screen and (min-device-width: 768px) and (orientation: portrait) {
    .logo {
      height: 220px;
      margin-top: 2rem;
      width: 114px;
    }
  }

  // ipad (landscape)
  @media only screen and (min-device-width: 768px) and (orientation: landscape) {
    .logo {
      height: 220px;
      margin-top: 2rem;
      width: 114px;
    }

    .search__styles--override {
      width: 768px;
    }
  }

  // standard desktop
  @media only screen and (min-device-width: 1224px) {
    .search__styles--override {
      width: 428px;
    }

    .logo {
      height: 190px;
      margin-top: 2rem;
      width: 99px;
    }
  }

  // HD desktop
  @media only screen and (min-device-width: 1824px) {
    .search__styles--override {
      width: 528px;
    }

    .logo {
      height: 190px;
      margin-top: 3rem;
      width: 99px;
    }
  }
`

export default Welcome
