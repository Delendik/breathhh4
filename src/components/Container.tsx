import styled from 'styled-components'
import { media } from 'src/media'

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${media.ms`
    padding: 0 20px;
  `}

  ${media.mobile`
     padding: 0 35px;
  `}

  ${media.tablet`
    max-width: 672px;
    margin: 0 auto;
    padding: 0 48px;
  `}

  ${media.laptop`
    max-width: 1120px;
    padding: 0 100px;
  `}
`

export const Container: React.FC = ({ children }) => {
  return <Root>{children}</Root>
}
