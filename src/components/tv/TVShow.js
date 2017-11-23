import React from 'react'

import CastCrew from 'containers/people/CastCrew'
import Backdrop from 'styled/Backdrop'
import SubjectImage from 'styled/SubjectImage'
import styled from 'styled-components'
import Div from 'styled/Div'

const TVShow = (props) => {
  const images = JSON.parse(localStorage.getItem('images'))
  const {
    id, credits, details, similar, videos
  } = props
  return (
    <TVDiv>
      <Backdrop>
        <img
          src={`${images.secure_base_url}${images.backdrop_sizes[3]}${details.backdrop_path}`}
          alt={details.name}
        />
      </Backdrop>
      <Div>
        <SubjectImage>
          <img
            src={`${images.secure_base_url}${images.poster_sizes[5]}${details.poster_path}`}
            alt={details.name}
          />
        </SubjectImage>
        <h2>{details.name}</h2>
        <p>{details.overview}</p>
        <CastCrew name={details.name} credits={credits} />
      </Div>
    </TVDiv>
  )
}

const TVDiv = styled.div`
  margin-top: -1em;
`

export default TVShow
