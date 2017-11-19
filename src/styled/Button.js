import styled from 'styled-components'

const Button = styled.button` 
  display: ${props => props.show ? 'inline' : 'none'};
  font: inherit;
  font-family: Alegreya;
  background: none;
  border: 0;
  color: inherit;
  /* cursor: default; */
  line-height: normal;
  overflow: visible;
  padding: 0;
`

export default Button
