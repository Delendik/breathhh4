import { Link } from '@reach/router'
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

export const Header: React.FC = observer(() => {
  return (
    <Root>
      <Title>Breathhh</Title>
      <Login>{UserStore.user ? <Profile /> : <Link to="/login">Log in</Link>}</Login>
    </Root>
  )
})
