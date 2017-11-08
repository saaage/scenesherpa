import React from 'react'
import styled from 'styled-components'

const Options = props => (
  <DropDown show={props.show}>
    { props.options }
  </DropDown>
)

const DropDown = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
`

export default Options
