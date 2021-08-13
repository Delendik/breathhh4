import { Link, useLocation } from '@reach/router'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import { UserStore } from 'src/store/UserStore'
import { Profile } from 'src/components/Profile'

const Root = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 860px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px;
`

const Title = styled.div`
  font-size: 22px;

  & a {
    color: inherit;
    text-decoration: none;
  }
`

const Login = styled.div`
  font-size: 22px;

  & a {
    color: inherit;
    text-decoration: none;
  }
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

interface IProps {
  hideLogin?: boolean
  enableNav?: boolean
}

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

export const Header: React.FC<IProps> = observer((props) => {
  const { hideLogin, enableNav } = props
  const { pathname } = useLocation()

  const isCurrentPath = pathname === `/login`

  return (
    <Root>
      <Title>
        <Link to="/">Breathhh</Link>
      </Title>
      {enableNav && (
        <Nav>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/subscription">Subscirption</NavLink>
        </Nav>
      )}

      {!hideLogin && (
        <Login>
          {UserStore.user ? (
            <Profile />
          ) : (
            <Link to={isCurrentPath ? `/` : `/login`}>{isCurrentPath ? `Go Back` : `Log in`}</Link>
          )}
        </Login>
      )}
    </Root>
  )
})
