import { createGlobalStyle } from 'styled-components'

const FontStyles = createGlobalStyle`
body {
  /* background: teal; */
  font-family: 'TTNormsPro-Md';
  font-weight: 500;
  /* font-weight: 00; */
}

@font-face {
  font-weight: 400;
  font-family: 'NeueMachina';
  font-style: normal;
  src: url('/fonts/PPNeueMachina-Regular/PPNeueMachina-Regular.woff') format('woff'),
    url('/fonts/PPNeueMachina-Regular/PPNeueMachina-Regular.woff2') format('woff2'),
    url('/fonts/PPNeueMachina-Regular/PPNeueMachina-Regular.eot') format('embedded-opentype'),
    url('/fonts/PPNeueMachina-Regular/PPNeueMachina-Regular.otf') format('opentype'),
    url('/fonts/PPNeueMachina-Regular/PPNeueMachina-Regular.ttf') format('truetype');
  font-display: swap;
}

@font-face {
  font-weight: 400;
  font-family: 'TTNormsProRg';
  font-style: normal;
  src: url('/fonts/TTNormsPro/TTNormsProRg/font.woff') format('woff'),
    url('/fonts/TTNormsPro/TTNormsProRg/font.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-weight: 500;
  font-family: 'TTNormsPro-Md';
  font-style: bold;
  src: url('/fonts/TTNormsPro/TTNormsProMd/font.woff') format('woff'),
    url('/fonts/TTNormsPro/TTNormsProMd/font.woff2') format('woff2');
  font-display: swap;
}
`

export default FontStyles
