// import { useState } from 'react'
import { Link } from '@reach/router'
import { observer } from 'mobx-react-lite'
import { UserStore } from 'src/store/UserStore'
import styled from 'styled-components'
import { media } from 'src/media'

import { Button } from 'src/ui/atoms'

const Root = styled.header<{ height: string; position: string }>`
  position: ${(props) => props.position};
  top: 0;
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
`

const Title = styled.div`
  width: 204px;
  height: 13px;
  background: no-repeat url(/assets/logo-breathhh.svg);

  ${media.tablet`
    width: 45px;
    height: 45px;
    background-image: url(/assets/icon-breathhh.svg);
  `}
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`
const SmallButton = styled.div`
  display: none;

  ${media.tablet`
    display: block;
  `}
`

const BigButton = styled.div`
  display: block;

  ${media.tablet`
    display: none;
  `}
`

interface IProps {
  hideLogin?: boolean
  enableNav?: boolean
}

export const Header: React.FC<IProps> = observer((props) => {
  const { enableNav } = props
  console.log(UserStore.showOnboarding)
  // const [scroll, setScroll] = useState(0)
  // window.addEventListener(`scroll`, function x() {
  //   setScroll(window.scrollY)
  // })
  return (
    <Root height={enableNav ? `89px` : `77px`} position={enableNav ? `relative` : `sticky`}>
      <Title />
      <ButtonContainer>
        {!enableNav ? (
          <Button type="button" appearanceTransponentBlack="transponentBlack">
            Sign in
          </Button>
        ) : (
          <Link to="/dashboard">
            <Avatar width="45" height="45" src={UserStore.user.picture} alt="user's avatar" />
          </Link>
        )}
        {UserStore.showOnboarding && (
          <div>
            <BigButton>
              <Button href="https://chrome.google.com/webstore/detail/breathhh/niipedbmjiopjpmjcpigiflabghcckeo">
                Add to Chrome — it’s free
              </Button>
            </BigButton>
            <SmallButton>
              <Button type="button" appearanceTransponentBlack="transponentBlack">
                Install
              </Button>
            </SmallButton>
          </div>
        )}
      </ButtonContainer>
    </Root>
  )
})
