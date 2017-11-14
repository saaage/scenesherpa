import React from 'react'
import CastCrew from 'containers/people/CastCrew'
import Backdrop from 'styled/Backdrop'
import SubjectImage from 'styled/SubjectImage'

const TVShow = (props) => {
  const images = JSON.parse(localStorage.getItem('images'))
  const {
    id, credits, details, similar, videos
  } = props
  return (
    <div>
      <Backdrop>
        <img
          src={`${images.base_url}${images.backdrop_sizes[3]}${details.backdrop_path}`}
          alt={details.name}
        />
      </Backdrop>
      <SubjectImage>
        <img
          src={`${images.base_url}${images.poster_sizes[5]}${details.poster_path}`}
          alt={details.name}
        />
      </SubjectImage>
      <h2>{details.name}</h2>
      <p>{details.overview}</p>
      <CastCrew credits={credits} />
    </div>
  )
}

export default TVShow
