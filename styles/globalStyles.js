import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  body {
    --accent: #2EC5CE;
    --accent-1: #FAFAFA;
    --accent-2: #EAEAEA;
    --accent-7: #333;
    --success: #0070f3;
    --cyan: #79FFE1;
    --white: #FFFFFF;
    --black: #000000;
  }

  h3 {
    padding-right: 1rem;
    margin: 0;
    font-size: 2.5rem;
    letter-spacing: -.04em;
    line-height: 1.2;
    font-weight: 700;
  }


`

export default GlobalStyles;