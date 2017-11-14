import React from 'react'
import { Link } from 'react-router-dom'

const Option = (props) => {
  if (props.media_type === 'person') {
    return (
      <div>
        <Link to={`/actor/${props.id}`}>{props.name}</Link>
      </div>
    )
  } else if (props.media_type === 'tv') {
    return (
      <div>
        <Link to={`/tv/${props.id}`}>{props.name}</Link>
      </div>
    )
  } else if (props.media_type === 'movie') {
    return (
      <div>
        <Link to={`/movie/${props.id}`}>{props.title}</Link>
      </div>
    )
  }
  return 'X'
}

export default Option
