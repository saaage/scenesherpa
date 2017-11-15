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
`
export default OptionsList
