import styled from 'styled-components'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'

const Root = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
`

export const LayoutBase: React.FC<{ hideLogin?: boolean; enableNav?: boolean }> = ({
  children,
  hideLogin,
  enableNav,
}) => {
  return (
    <Root>
      <div>
        <Header hideLogin={hideLogin} enableNav={enableNav} />
        {children}
      </div>
      <Footer />
    </Root>
  )
}
