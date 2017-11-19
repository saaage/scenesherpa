import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Option from 'components/welcome/Option'

const OptionsList = (props) => {
  const ids = []
  const options = props.options.map((o) => {
    if (ids.indexOf(o.id) === -1) {
      ids.push(o.id)
      return (
        <Option
          hide={props.hide}
          stopBlur={props.stopBlur}
          mouseUp={props.mouseUp}
          key={o.id}
          {...o}
        />
      )
    }
    return null
  })
  return <DropDown show={props.show}>{options}</DropDown>
}
OptionsList.propTypes = {
  show: PropTypes.bool.isRequired
}

const DropDown = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  padding: 1em;
  button {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    display: block;
    height:2.5em;
    background: none;
    border: 0;
    color: inherit;
    /* cursor: default; */
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 4px;
  }
  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    font-family: Open Sans;
  }
}
`
export default OptionsList
