import React from 'react'
import getYear from 'date-fns/get_year'

const TVListItem = (props) => {
  const images = JSON.parse(localStorage.getItem('images'))
  if (props.poster_path) {
    return (
      <li>
        <img src={`${images.base_url}${images.poster_sizes[1]}${props.poster_path}`} alt={props.name} />
        <br />
        {props.name} ({getYear(props.first_air_date)})
        <br />
        <b><em>{props.character ? props.character : null}</em></b>
      </li>
    )
  }
  return null
}

export default TVListItem
