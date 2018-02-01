import styled from 'styled-components'

const Input = styled.input`
  background: transparent;
  border: none;
  display: inline-block;
  flex: 1;
  font-size: 1.25rem;
  margin-bottom: .25rem;
  margin-top: .25rem;
  min-height: 25px;
  padding-left: .5rem;

  :focus {
    outline: 0;
    outline-color: transparent;
    outline-style: none;
  }
`

export default Input
