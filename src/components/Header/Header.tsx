import ReactGa from 'react-ga'
import { useState, useEffect, useRef } from 'react'
import { Link } from '@reach/router'
import { observer } from 'mobx-react-lite'
import { UserStore } from 'src/store/UserStore'
import styled from 'styled-components'
import { media } from 'src/media'

import { Button } from 'src/ui/atoms'

ReactGa.initialize(`UA-196308133-3`)
const Root = styled.header.attrs((props) => ({ classname: props.className }))`
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
  margin-left: 34px;

  &.top {
    position: relative;
  }

  &.hide {
    height: 89px;
    animation: headerFadeOut ease-in 0.5s forwards;
  }

  &.show {
    height: 77px;
    animation: headerFadeIn ease-in 0.5s forwards;
  }

  @keyframes headerFadeIn {
    from {
      position: relative;
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      position: sticky;
    }
  }

  @keyframes headerFadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
      position: sticky;
    }
    to {
      position: relative;
      opacity: 0;
      transform: translateY(-100%);
    }
  }
`

const Border = styled.div`
  height: 77px;
  position: absolute;
  width: 100%;
  &:before {
    content: '';
    position: absolute;
    top: 77px;
    right: -34px;
    left: -34px;
    height: 1px;
    border-top: solid 1px var(--color-ground-100);
  }
`

const Title = styled.div`
  width: 204px;
  height: 13px;
  background: no-repeat url(/assets/logo-breathhh.svg);
  z-index: 10;

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
  z-index: 10;
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
  showSticky?: boolean
}

export const Header: React.FC<IProps> = observer((props) => {
  const { enableNav, showSticky } = props
  const [scroll, setScroll] = useState(false)
  const [up, setUp] = useState(false)

  const watcherRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      root: document,
      rootMargin: `700px`,
      threshold: 0,
    }

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setScroll(false)
        } else {
          setUp(true)
          setScroll(true)
        }
      })
    }

    const options2 = {
      root: document,
      rootMargin: `200px`,
      threshold: 0,
    }

    const callback2 = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setUp(false)
        }
      })
    }

    const scrollObserver = new IntersectionObserver(callback, options)
    const scrollObserver2 = new IntersectionObserver(callback2, options2)

    scrollObserver.observe(watcherRef.current)
    scrollObserver2.observe(watcherRef.current)
    return () => {
      scrollObserver.unobserve(headerRef.current)
      scrollObserver2.unobserve(headerRef.current)
    }
  }, [headerRef])
  const sticky = scroll ? `show` : !scroll && up && `hide`
  const eventTrack = (category, action, label) => {
    console.log(`GA event:`, category, `:`, action, `:`, label)
    ReactGa.event({
      category,
      action,
      label,
    })
  }
  return (
    <>
      <div ref={watcherRef} />
      <Root ref={headerRef} className={!up || showSticky !== undefined ? `top` : sticky}>
        {scroll && <Border />}
        <ButtonContainer>
          <Link to="/">
            <Title />
          </Link>
        </ButtonContainer>
        <ButtonContainer>
          {!enableNav ? (
            <Link to="/login">
              <Button
                type="button"
                appearanceTransponentBlack="transponentBlack"
                // @ts-ignore
                onClick={eventTrack(`button`, `click`, `to_webstore`)}
              >
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
                <Button
                  href="https://chrome.google.com/webstore/detail/breathhh/niipedbmjiopjpmjcpigiflabghcckeo"
                  // @ts-ignore
                  onClick={
                    !scroll
                      ? eventTrack(`button`, `click`, `to_webstore`)
                      : eventTrack(`button`, `click`, `to_webstore_sticky`)
                  }
                >
                  Add to Chrome — it’s free
                </Button>
              </BigButton>
              <SmallButton>
                <Button
                  type="button"
                  appearanceTransponentBlack="transponentBlack"
                  href="https://chrome.google.com/webstore/detail/breathhh/niipedbmjiopjpmjcpigiflabghcckeo"
                  // @ts-ignore
                  onClick={
                    !scroll
                      ? eventTrack(`button`, `click`, `to_webstore`)
                      : eventTrack(`button`, `click`, `to_webstore_sticky`)
                  }
                >
                  Install
                </Button>
              </SmallButton>
            </div>
          )}
        </ButtonContainer>
      </Root>
    </>
  )
})
