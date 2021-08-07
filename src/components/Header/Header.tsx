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
`

const Login = styled.div`
  font-size: 22px;
`

interface IProps {
  hideLogin?: boolean
}

export const Header: React.FC<IProps> = observer((props) => {
  const { hideLogin } = props
  const { pathname } = useLocation()

  const isCurrent = pathname === '/login'

  return (
    <Root>
      <Title>Breathhh</Title>
      {!hideLogin && (
        <Login>
          {UserStore.user ? (
            <Profile />
          ) : (
            <Link to={isCurrent ? '/' : '/login'}>{isCurrent ? 'Go Back' : 'Log in'}</Link>
          )}
        </Login>
      )}
    </Root>
  )
})
