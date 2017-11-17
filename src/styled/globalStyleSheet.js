import { injectGlobal } from 'styled-components'

const global = injectGlobal`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0px;
  }
`

export default global
