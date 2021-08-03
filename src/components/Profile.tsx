import styled from 'styled-components'
import { useNavigate } from '@reach/router'
import { observer } from 'mobx-react-lite'

import { UserStore } from 'src/store/UserStore'
import { chromeExtUrl } from 'src/utils/config'

const Root = styled.div`
  position: relative;
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`
const Avatar = styled.img`
  margin-right: 8px;
  border-radius: 50%;
`

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  display: none;
  padding-top: 20px;

  ${/* sc-selector */ Root}:hover & {
    display: block;
  }
`

const DropdownInner = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(28, 65, 84, 0.08), 0 24px 128px rgba(28, 65, 84, 0.12);
`

const DropdownItem = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s;

  &:not(:last-child) {
    border-bottom: 1px solid #e7edf3;
  }

  &:hover {
    opacity: 0.8;
  }
`

const Href = styled.a`
  color: inherit;
  text-decoration: none;
`

export const Profile = observer(() => {
  const navigate = useNavigate()

  const handleReset = () => {
    UserStore.logout()
    navigate('/login', { replace: true })
  }

  return (
    <Root>
      <Inner>
        <Avatar width="32" height="32" src={UserStore.avatar} alt="User Avatar" />
        <div>{UserStore.user?.name}</div>
      </Inner>

      <Dropdown>
        <DropdownInner>
          <DropdownItem>
            <Href href={chromeExtUrl}>Extension&nbsp;in&nbsp;Store</Href>
          </DropdownItem>
          <DropdownItem onClick={handleReset}>Logout</DropdownItem>
        </DropdownInner>
      </Dropdown>
    </Root>
  )
})
