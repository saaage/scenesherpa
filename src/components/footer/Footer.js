import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = props => (
  <FooterStyled className={props.className}>
    <Link to="#" className="link">About</Link>
  </FooterStyled>
) 

const FooterStyled = styled.footer`
  display: flex;

  .link {
    align-self: center;
    color: #5B97BA;
    font-family: 'Open Sans';
    font-size: 1rem;
    margin-top: auto;
    padding: 2rem 1rem 1rem 1rem;
    text-decoration: none;
  }
`
export default Footer
