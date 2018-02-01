import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Option = (props) => {
  if (props.media_type === 'person') {
    return (
      <Link to={`/actor/${props.id}`}>
        <Button 
          onMouseDown={props.stopBlur}
          onMouseUp={props.mouseUp}
          onClick={props.hide}
        >
          {props.name}
        </Button>
      </Link>
    )
  } else if (props.media_type === 'tv') {
    return (
      <Link to={`/tv/${props.id}`}>
        <Button
          onMouseDown={props.stopBlur}
          onMouseUp={props.mouseUp}
          onClick={props.hide}
        >
          {props.name}
        </Button>
      </Link>
    )
  } else if (props.media_type === 'movie') {
    return (
      <Link to={`/movie/${props.id}`}>
        <Button
          onMouseDown={props.stopBlur}
          onMouseUp={props.mouseUp}
          onClick={props.hide}
        >
          <span className="optionTitle">{props.title}</span>
        </Button>
      </Link>
    )
  }
  return null
}

const Button = styled.button`
  width: 100%;

  .optionTitle {
    white-space: nowrap;
  }
`

export default Option
