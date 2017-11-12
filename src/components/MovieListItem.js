import React from 'react'

const MovieListItem = (props) => {
  const images = JSON.parse(localStorage.getItem('images'))
  if (props.poster_path) {
    return (
      <li>
        <img src={`${images.base_url}${images.poster_sizes[1]}${props.poster_path}`} alt={props.title} />
        <br />
        {props.title} <em>{props.character ? props.character : null }</em>
      </li>
    )
  }
  return null
}

export default MovieListItem
