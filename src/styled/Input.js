import styled from 'styled-components'

const Input = styled.input`
  background: transparent;
  border: none;
  display: block;
  font-size: 1.25rem;
  margin-bottom: .25rem;
  margin-top: .25rem;
  min-height: 25px;
  padding-left: .5em;
  width: 100%;

  :focus {
    outline: 0;
    outline-color: transparent;
    outline-style: none;
  }
`

export default Input
