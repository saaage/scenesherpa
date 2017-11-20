// renders a movieListItem for a given actor

import React from 'react'
import getYear from 'date-fns/get_year'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MovieListItem = (props) => {
  const images = JSON.parse(localStorage.getItem('images'))
  if (props.poster_path) {
    return (
      <StyledListItem>
        <Link to={`/movie/${props.id}`}>
          <div>
            <img
              src={`${images.secure_base_url}${images.poster_sizes[4]}${props.poster_path}`}
              alt={props.title}
            />
          </div>
        </Link>
        <p>{props.title} ({getYear(props.release_date)})</p>
        <b><em>{props.character ? props.character : null}</em></b>
      </StyledListItem>
    )
  }
  return null
}

const StyledListItem = styled.li`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #4F4F4F;
  font-family: Alegreya, serif;
  height: 370px;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  width: 154px;
  div {
    height: 282px;
  }
  img {
    width: 154px;
  }
  p , b {
    display: block;
    width: 154px;
    height: 2.5em;
    padding: 2px;
    margin: 0px;
    overflow: hidden;
  }
  overflow: hidden;
  vertical-align: top;
`
export default MovieListItem
