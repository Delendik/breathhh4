import styled from 'styled-components'
import { media } from 'src/media'

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1120px;
  width: 100%;
  padding: 0 100px;
  margin: 0 auto;

  ${media.laptop`
    max-width: 672px;
    padding: 0 48px;
  `}
  ${media.tablet`
    padding: 0 35px;
  `}
  ${media.mobile`
    padding: 0 20px;
  `}
`

export const Container: React.FC = ({ children }) => {
  return <Root>{children}</Root>
}
