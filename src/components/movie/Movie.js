// renders inside of MovieContainer.js

import React from 'react'
import getYear from 'date-fns/get_year'

import CastCrew from 'containers/people/CastCrew'
import SubjectImage from 'styled/SubjectImage'
import Backdrop from 'styled/Backdrop'

const Movie = (props) => {
  const {
    id, config, details, credits, videos, similar
  } = props
  if (details.id) {
    return (
      <div>
        <Backdrop>
          <img
            src={`${config.base_url}${config.backdrop_sizes[3]}${details.backdrop_path}`}
            alt={details.name}
          />
        </Backdrop>
        <SubjectImage>
          <img
            src={`${config.base_url}${config.poster_sizes[4]}${details.poster_path}`}
            alt={details.title}
          />
        </SubjectImage>
        <h2>{details.title} ({getYear(details.release_date)})</h2>
        <p>{details.overview}</p>
        <CastCrew credits={credits} />
      </div>
    )
  }
  return <h1>presentation loading...</h1>
}

export default Movie
