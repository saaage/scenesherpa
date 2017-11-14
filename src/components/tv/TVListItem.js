// displays a TVListItem for a given actor

import React from 'react'
import getYear from 'date-fns/get_year'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TVListItem = (props) => {
  const images = JSON.parse(localStorage.getItem('images'))
  if (props.poster_path) {
    return (
      <StyledListItem>
        <div>
          <Link to={`/tv/${props.id}`}>
            <img
              src={`${images.base_url}${images.poster_sizes[4]}${props.poster_path}`}
              alt={props.name}
            />
          </Link>
    
        </div>
        <p>{props.name} ({getYear(props.first_air_date)})</p>
        <b><em>{props.character ? props.character : null}</em></b>
      </StyledListItem>
    )
  }
  return null
}

const StyledListItem = styled.li`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #4F4F4F;
  font-family: Alegreya;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  height: 372px;
  div {
    height: 258px;
    overflow: hidden;
  }
  img {
    width: 154px;
    overflow: hidden;
  }
  p , b {
    display: block;
    max-width: 154px;
    min-height: 44px;
    max-height: 44px;
    overflow: hidden;
    padding: 0px;
    margin: 0px;
  }
  b {
    margin-top: auto;
    margin-bottom: auto;
  }
  overflow: hidden;
`

export default TVListItem
