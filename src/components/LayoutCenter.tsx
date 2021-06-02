import styled from 'styled-components'
import { DevelopedBy } from './DevelopedBy'

const Root = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
`

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = styled.footer`
  padding: 40px;
`

export const LayoutCenter: React.FC = ({ children }) => {
  return (
    <Root>
      <Main>{children}</Main>
      <Footer>
        <DevelopedBy />
      </Footer>
    </Root>
  )
}
