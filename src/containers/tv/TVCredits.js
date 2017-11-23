// gets tv credits for a given actor id

import React from 'react'

import TVListItem from 'components/tv/TVListItem'
import MediaList from 'styled/MediaList'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

const TVCredits = (props) => {
  const { cast } = props.tv
  const ids = [] // will be used to track unique id values before we create a new TVListItem
  const credits = cast.map((t) => {
    if (ids.indexOf(t.id) === -1) {
      ids.push(t.id)
      return <TVListItem key={t.id} {...t} />
    }
    return null
  })
  if (credits.length > 0) {
    return (
      <div>
        <MediaList>{credits}</MediaList>
      </div>
    )
  }
  return <h3>No TV shows listed for {props.name}</h3>
}

export default TVCredits
