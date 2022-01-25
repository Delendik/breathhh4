import { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import { observer } from 'mobx-react-lite'
import { UserStore } from 'src/store/UserStore'
import styled from 'styled-components'
import { media } from 'src/media'

import { Button } from 'src/ui/atoms'

const Root = styled.header<{
  height: string
  position: string
  marginR: string
  animation: string
}>`
  position: ${(props) => props.position};
  top: 0;
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
  margin-left: 34px;
  margin-right: ${(props) => props.marginR};
  /* animation: headerFadeIn linear 2s; */
  animation: ${(props) => props.animation};

  @keyframes headerFadeIn {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

// export const headerFadeIn = keyframes`
//     from {
//     opacity: 0;
//     transform: translateY(-100%);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `

const Border = styled.div`
  height: 77px;
  position: absolute;
  width: 100%;
  &:before {
    content: '';
    position: absolute;
    top: 77px;
    right: 24px;
    left: 0px;
    height: 1px;
    border-top: solid 1px var(--color-ground-100);
  }
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
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    const doSomething = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener(`scroll`, doSomething)
    return () => {
      window.removeEventListener(`scroll`, doSomething)
    }
  }, [])
  return (
    <Root
      height={scroll < 700 ? `89px` : `77px`}
      position={scroll < 700 ? `relative` : `sticky`}
      marginR={UserStore.showOnboarding ? `34px` : `10px`}
      animation={scroll >= 700 && `headerFadeIn linear 0.5s`}
    >
      {scroll >= 700 && <Border />}
      <Link to="/">
        <Title />
      </Link>
      <ButtonContainer>
        {!enableNav ? (
          <Link to="/login">
            <Button type="button" appearanceTransponentBlack="transponentBlack">
              Sign in
            </Button>
          </Link>
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
              <Button
                type="button"
                appearanceTransponentBlack="transponentBlack"
                href="https://chrome.google.com/webstore/detail/breathhh/niipedbmjiopjpmjcpigiflabghcckeo"
              >
                Install
              </Button>
            </SmallButton>
          </div>
        )}
      </ButtonContainer>
    </Root>
  )
})
