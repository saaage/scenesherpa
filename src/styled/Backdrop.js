import styled from 'styled-components'

const Backdrop = styled.div`
  min-height: 173px;
  max-height:173px;
  img {
    width: 100vw;
  }
  @media only screen and (min-width: 1000px) {
    min-height: 818px;
  }
`

export default Backdrop
