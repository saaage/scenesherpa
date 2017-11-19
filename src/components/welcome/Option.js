import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Option = (props) => {
  if (props.media_type === 'person') {
    return (
      <Link to={`/actor/${props.id}`}>
        <button 
          onMouseDown={props.stopBlur}
          onMouseUp={props.mouseUp}
          onClick={props.hide}
        >
          {props.name}
        </button>
      </Link>
    )
  } else if (props.media_type === 'tv') {
    return (
      <Link to={`/tv/${props.id}`}>
        <button
          onMouseDown={props.stopBlur}
          onMouseUp={props.mouseUp}
          onClick={props.hide}
        >
          {props.name}
        </button>
      </Link>
    )
  } else if (props.media_type === 'movie') {
    return (
      <Link to={`/movie/${props.id}`}>
        <button
          onMouseDown={props.stopBlur}
          onMouseUp={props.mouseUp}
          onClick={props.hide}
        >
          {props.title}
        </button>
      </Link>
    )
  }
  return 'X'
}

export default Option
