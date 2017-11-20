// accepts a crew a prop and renders members out as CrewMembers

import React from 'react'
import styled from 'styled-components'
import List from 'styled/List'

const Crew = (props) => {
  const { crew } = props
  const images = JSON.parse(localStorage.getItem('images'))
  const ids = []
  const noImageCrew = []
  const staff = crew.map((a) => {
    if (a.profile_path && ids.indexOf(a.id) === -1) {
      ids.push(a.id)
      return (
        <CrewMember key={a.id}>
          <div>
            <img
              src={`${images.secure_base_url}${images.profile_sizes[3]}${a.profile_path}`}
              alt={a.name}
            />
          </div>
          <p>{a.name}: </p>
          <em>{a.department}</em>
        </CrewMember>
      )
    } else if (!a.profile_path && ids.indexOf(a.id) === -1) {
      ids.push(a.id)
      noImageCrew.push(a)
      return null
    }
    return null
  })
  const remaining = noImageCrew.map((a) => {
    return (
      <NoImageCrew key={a.id}>
        <span>
          {a.name}:
          <b><em> {a.department}</em></b>
        </span>
      </NoImageCrew>
    )
  })
  return (
    <span>
      <List>{staff}</List>
      { remaining.length > 0 &&
        <span>
          <h4>No Profile Image</h4>
          <List>
            {remaining}
          </List>
        </span>
      }
    </span>
  )
}

const CrewMember = styled.li`
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  display: inline-block;
  overflow: hidden;
  width: 135px;
  vertical-align: top;
  div {
    height: 203px;
    margin-bottom: 6px;
    overflow: hidden;
  }
  img {
    height: 203px;
  }
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  p, em {
    margin: 0px;
    display: block;
    padding: 0px;
    width: 133px;
    height: 46px;
  }
`

const NoImageCrew = styled.li`
  font-family: Alegreya, serif;
`

export default Crew
