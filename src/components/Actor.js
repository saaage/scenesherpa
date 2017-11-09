import React from 'react'

const Actor = ({actor, images}) => {
  // if our api call was sucessful render dynamic HTML, if not return null
  if (actor.profile_path) {
    return (
      <div>
        <img
          src={`${images.base_url}${images.profile_sizes[1]}${actor.profile_path}`}
          alt={actor.name}
        />
        <h2>{actor.name}</h2>
        <p>{actor.biography}</p>
      </div>
    )
  }
  return null
}

export default Actor
