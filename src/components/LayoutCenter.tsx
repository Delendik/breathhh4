// import ReactPixel from 'react-facebook-pixel'
import styled from 'styled-components'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Container } from './Container'

const Root = styled.div`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`

const Test = styled.div`
  height: 2000px;
`

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LayoutCenter: React.FC = ({ children }) => {
  // const options = {
  //   autoConfig: true,
  //   debug: false,
  // }
  // // @ts-ignore
  // ReactPixel.init(`218867823794422`, options)

  // ReactPixel.pageView()
  return (
    <Root>
      <Header />
      <Container>
        <Main>{children}</Main>
        <Test />
        <Footer />
      </Container>
    </Root>
  )
}
