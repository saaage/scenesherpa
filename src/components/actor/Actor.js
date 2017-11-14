import React from 'react'
import diffInYears from 'date-fns/difference_in_calendar_years'
import formatDate from 'date-fns/format'

import ActorMedia from 'containers/actor/ActorMedia'
import Biography from 'components/actor/Biography'
import SubjectImage from 'styled/SubjectImage'

const Actor = (props) => {
  const {
    profile, config, movies, tv
  } = props
  const bDay = new Date(profile.birthday)
  const age = profile.deathday == null ?
    diffInYears(new Date(), bDay) :
    diffInYears(new Date(profile.deathday), bDay)

  if (profile.profile_path) {
    // The Actor component will only be rendered if ActorContainer.isLoading == false, however we
    //  still read profile.profile_path to double check that props has been loaded with the info
    //  we need
    return (
      <div>
        <SubjectImage>
          <img
            src={`${config.base_url}${config.profile_sizes[2]}${profile.profile_path}`}
            alt={profile.name}
          />
        </SubjectImage>
        <h2>{profile.name}</h2>
        <h3>{age} years old</h3>
        <p>Born: {formatDate(bDay, 'MMMM DD, YYYY')}</p>
        <p>Hometown: {profile.place_of_birth}</p>
        <Biography bio={profile.biography} />
        <ActorMedia id={props.id} tv={tv} movies={movies}/>
      </div>
    )
  }
  return <h2>presentation loading...</h2>
}

export default Actor
