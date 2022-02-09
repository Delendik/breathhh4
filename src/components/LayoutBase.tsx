// import ReactPixel from 'react-facebook-pixel'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Container } from './Container'

const Root = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`
const Nav = styled.div`
  display: flex;
  gap: 10px;
  color: #232a34;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;

  & a {
    color: inherit;
    text-decoration: none;
  }
`

// const ForReview = styled.div`
//   height: 800px;
// `
const NavLink = (props: React.ComponentProps<typeof Link>) => (
  <Link
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          opacity: isCurrent ? `1` : `0.5`,
        },
      }
    }}
  />
)
export const LayoutBase: React.FC<{
  hideLogin?: boolean
  enableNav?: boolean
  showSticky?: boolean
}> = ({ children, hideLogin, enableNav, showSticky }) => {
  // const options = {
  //   autoConfig: true,
  //   debug: false,
  // }
  // // @ts-ignore
  // ReactPixel.init(`218867823794422`, options)

  // ReactPixel.pageView()
  return (
    <Root>
      <div>
        <Header hideLogin={hideLogin} enableNav={enableNav} showSticky={showSticky} />
        <Container>
          {enableNav && (
            <Nav>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/subscription">Subscirption</NavLink>
              <NavLink to="/diary">Diary</NavLink>
              <NavLink to="/account">Account</NavLink>
            </Nav>
          )}
          {children}
        </Container>
      </div>
      <Container>
        <Footer />
      </Container>
    </Root>
  )
}
