import React from 'react'

const Actor = (props) => {
  // if our api call was sucessful render dynamic HTML, if not return null
  const {profile, images, movie, tv} = props
  if (profile.profile_path) {
    return (
      <div>
        <img
          src={`${images.base_url}${images.profile_sizes[1]}${profile.profile_path}`}
          alt={profile.name}
        />
        <h2>{profile.name}</h2>
        <p>{profile.biography}</p>
      </div>
    )
  }
  return null
}

export default Actor
