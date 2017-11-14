// renders inside of MovieContainer.js

import React from 'react'
import CastCrew from 'containers/movie/CastCrew'
import getYear from 'date-fns/get_year'

const Movie = (props) => {
  const {
    id, config, details, credits, videos, similar
  } = props
  if (details.id) {
    return (
      <div>
        <img
          src={`${config.base_url}${config.poster_sizes[1]}${details.poster_path}`}
          alt={details.title}
        />
        <h2>{details.title} ({getYear(details.release_date)})</h2>
        <p>{details.overview}</p>
        <CastCrew credits={credits} />
      </div>
    )
  }
  return null
}

export default Movie
