// renders inside of MovieContainer.js

import React from 'react'
import getYear from 'date-fns/get_year'

import CastCrew from 'containers/people/CastCrew'
import SubjectImage from 'styled/SubjectImage'
import Backdrop from 'styled/Backdrop'
import styled from 'styled-components'
import Div from 'styled/Div'

const Movie = (props) => {
  const {
    id, config, details, credits, videos, similar
  } = props
  if (details) {
    return (
      <MovieDiv>
        <Backdrop>
          <img
            src={`${config.secure_base_url}${config.backdrop_sizes[3]}${details.backdrop_path}`}
            alt={details.title}
          />
        </Backdrop>
        <Div>
          <SubjectImage>
            <img
              src={`${config.secure_base_url}${config.poster_sizes[4]}${details.poster_path}`}
              alt={details.title}
            />
          </SubjectImage>
          {details.release_date && <h2>{details.title} ({getYear(details.release_date)})</h2>}
          <p>{details.overview}</p>
          <CastCrew title={details.title} credits={credits} />
        </Div>
      </MovieDiv>
    )
  }
  return null
}

const MovieDiv = styled.div`
  margin-top: -1em;
`

export default Movie
