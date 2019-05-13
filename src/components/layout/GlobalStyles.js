import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web');

  body {
    font-family: 'Titillium Web', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box;
  }
`

export default GlobalStyles
