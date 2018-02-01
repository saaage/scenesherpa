import React from 'react'
import StyledLink from 'styled/StyledLink'
import styled from 'styled-components'

const Option = (props) => {
  if (props.media_type === 'person') {
    return (
      <StyledLink to={`/actor/${props.id}`}>
        <Button 
          onMouseDown={props.stopBlur}
          onMouseUp={props.mouseUp}
          onClick={props.hide}
        >
          {props.name}
        </Button>
      </StyledLink>
    )
  } else if (props.media_type === 'tv') {
    return (
      <StyledLink
        to={`/tv/${props.id}`}>
        <Button
          onMouseDown={props.stopBlur}
          onMouseUp={props.mouseUp}
          onClick={props.hide}
        >
          {props.name}
        </Button>
      </StyledLink>
    )
  } else if (props.media_type === 'movie') {
    return (
      <StyledLink to={`/movie/${props.id}`}>
        <Button
          onMouseDown={props.stopBlur}
          onMouseUp={props.mouseUp}
          onClick={props.hide}
        >
          <span className="optionTitle">{props.title}</span>
        </Button>
      </StyledLink>
    )
  }
  return null
}

const Button = styled.button`
  display: block;
  height:2.5em;
  background: none;
  border: 1px solid lightgray;
  border-top: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: hidden;
  padding: 4px 4px 4px .5rem;
  text-align: left;
  width: 100%;

  .optionTitle {
    white-space: nowrap;
  }
`

export default Option
