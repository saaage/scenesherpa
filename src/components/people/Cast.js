// accepts a cast object as a prop and renders members out to Character components

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import List from 'styled/List'

const Cast = (props) => {
  const { cast } = props
  const images = JSON.parse(localStorage.getItem('images'))
  const ids = []
  const noImageActors = []
  const actors = cast.map((a) => {
    if (a.profile_path && ids.indexOf(a.id) === -1) {
      ids.push(a.id)
      return (
        <Character key={a.id}>
          <div>
            <Link to={`/actor/${a.id}`}>
              <img
                src={`${images.secure_base_url}${images.profile_sizes[3]}${a.profile_path}`}
                alt={a.name}
              />
            </Link>
          </div>
          <p>{a.name} </p>
          <b><em>{a.character}</em></b>
        </Character>
      )
    } else if (!a.profile_path && ids.indexOf(a.id) === -1) {
      ids.push(a.id)
      noImageActors.push(a)
      return null
    }
    return null
  })
  const remaining = noImageActors.map((a) => {
    return (
      <NoImageCharacter key={a.id}>
        <Link to={`/actor/${a.id}`}>
          {a.name}:
          <b><em>  {a.character}</em></b>
        </Link>
      </NoImageCharacter>
    )
  })
  return (
    <span>
      <List>{actors}</List>
      { remaining.length > 0 &&
        <span>
          <h4>No Profile Images</h4>
          <List>{remaining}</List>
        </span>
      }
    </span>
  )
}

const Character = styled.li`
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  color: #4F4F4F;
  font-family: Alegreya, serif;
  display: inline-block;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  overflow: hidden;
  vertical-align: top;
  width: 135px;
  div {
    height: 203px;
    margin-bottom: 6px;
    overflow: hidden;
  }
  img {
    height: 231px;
  }
  p, em {
    margin: 0px;
    display: block;
    padding: 0px;
    width: 133px;
    height: 46px;
  }
`
const NoImageCharacter = styled.li`
  font-family: Alegreya, serif;
  margin-left: 1em;
  a {
    text-decoration: none;
  }
`
export default Cast
