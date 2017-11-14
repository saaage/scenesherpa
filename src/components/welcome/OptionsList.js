import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const OptionsList = props =>
  <DropDown show={props.show}>{props.options}</DropDown>

OptionsList.propTypes = {
  show: PropTypes.bool.isRequired
}

const DropDown = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
`
export default OptionsList
