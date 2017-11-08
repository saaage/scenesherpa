import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Options = props => (
  <DropDown show={props.show}>
    { props.options }
  </DropDown>
)

Options.propTypes = {
  show: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.object)
}

Options.defaultProps = {
  options: []
}

const DropDown = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
`

export default Options
