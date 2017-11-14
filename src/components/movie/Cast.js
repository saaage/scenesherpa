// accepts a cast object as a prop and renders members out to Character components

import React from 'react'
import styled from 'styled-components'
import List from 'styled/List'

const Cast = (props) => {
  const { cast } = props
  const images = JSON.parse(localStorage.getItem('images'))
  const ids = []
  const actors = cast.map((a) => {
    if (a.profile_path && ids.indexOf(a.id) === -1) {
      ids.push(a.id)
      return (
        <Character key={a.id}>
          <div>
            <img
              src={`${images.base_url}${images.profile_sizes[1]}${a.profile_path}`}
              alt={a.name}
            />
          </div>
          <p>{a.name}: </p>
          <b><em>{a.character}</em></b>
        </Character>
      )
    } else if (ids.indexOf(a.id) === -1) {
      return (
        <Character key={a.id}>
          <div />
          <p>{a.name}</p>
          <em>{a.character}</em>
        </Character>
      )
    }
    return null
  })
  return (
    <List>{actors}</List>
  )
}

const Character = styled.li`
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  display: inline-block;
  div {
    height: 203px;
    margin-bottom: 6px;
    overflow: hidden;
  }
  img {
    width: 135px;
  }
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  p, em {
    margin: 0px;
    display: block;
    padding: 0px;
    width: 133px;
    height: 36px;
  }
  overflow: hidden;
  width: 135px;
`

export default Cast
