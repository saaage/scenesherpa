// accepts a crew a prop and renders members out as CrewMembers

import React from 'react'
import styled from 'styled-components'
import List from 'styled/List'

const Crew = (props) => {
  const { crew } = props
  const images = JSON.parse(localStorage.getItem('images'))
  const staff = crew.map((a) => {
    if (a.profile_path) {
      return (
          <CrewMember key={a.id}>
            <div>
              <img
                src={`${images.base_url}${images.profile_sizes[1]}${a.profile_path}`}
                alt={a.name}
              />
            </div>
            <p>{a.name}: </p>
            <em>{a.department}</em>
          </CrewMember>
      )
    }
    return (
      <CrewMember key={a.id}>
        <div />
        <p>{a.name}</p>
        <em>{a.character}</em>
      </CrewMember>
    )
  })
  return (
    <List>{staff}</List>
  )
}

const CrewMember = styled.li`
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

export default Crew