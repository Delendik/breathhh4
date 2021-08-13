import styled from 'styled-components'
import { Link } from '@reach/router'
import { observer } from 'mobx-react-lite'

import { UserStore } from 'src/store/UserStore'

const Root = styled.div`
  & a {
    color: inherit;
    text-decoration: none;
  }
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`
const Avatar = styled.img`
  margin-right: 8px;
  border-radius: 50%;
`

export const Profile = observer(() => {
  return (
    <Root>
      <Link to="/account">
        <Inner>
          <Avatar width="32" height="32" src={UserStore.avatar} alt="User Avatar" />
          <div>{UserStore.user?.name}</div>
        </Inner>
      </Link>
    </Root>
  )
})
