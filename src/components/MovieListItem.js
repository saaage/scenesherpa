import React from 'react'
import getYear from 'date-fns/get_year'

const MovieListItem = (props) => {
  const images = JSON.parse(localStorage.getItem('images'))
  if (props.poster_path) {
    return (
      <li>
        <img src={`${images.base_url}${images.poster_sizes[1]}${props.poster_path}`} alt={props.title} />
        <br />
        {props.title} ({getYear(props.release_date)})
        <br />
        <b><em>{props.character ? props.character : null}</em></b>
      </li>
    )
  }
  return null
}

export default MovieListItem