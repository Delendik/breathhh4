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
  height: 89px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
  overflow: hidden;
  padding-bottom: 1px;

  ${media.tablet`
    width: 100%;
  `}

  ${media.mobile`
    height: 73px;
  `}

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
    overflow: hidden;
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
  border-bottom: solid 1px var(--color-ground-100);
  margin-right: -34px;
`

const Title = styled.div<{ h: string; w: string; bg: string }>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background: ${(props) => props.bg};
  z-index: 10;
  margin-left: 34px;

  ${media.tablet`
    width: 45px;
    height: 45px;
    margin-left: 20px;
    background-image: url(/assets/icon-breathhh.svg);
  `}
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 10;
  margin-right: 34px;

  ${media.tablet`
    margin-right: 20px;
    gap: 4px;
  `}
`

const WrapperAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
  const { showSticky, hideLogin } = props
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
            <Title
              bg={
                !up || showSticky !== undefined
                  ? `no-repeat url(/assets/logo-breathhh.svg)`
                  : `no-repeat url(/assets/icon-breathhh.svg)`
              }
              w={!up || showSticky !== undefined ? `204px` : `45px`}
              h={!up || showSticky !== undefined ? `13px` : `45px`}
            />
          </Link>
        </ButtonContainer>
        <ButtonContainer>
          {!UserStore.user ? (
            <Link to="/login">
              {!hideLogin && (
                <Button type="button" appearanceTransponentBlack="transponentBlack">
                  Sign in
                </Button>
              )}
            </Link>
          ) : (
            <Link to="/dashboard">
              <WrapperAvatar>
                <Avatar width="45" height="45" src={UserStore.user.picture} alt="user's avatar" />
              </WrapperAvatar>
            </Link>
          )}
          {UserStore.showCompleted ||
            (!UserStore.user && (
              <div>
                <BigButton>
                  <Button
                    href="https://chrome.google.com/webstore/detail/breathhh/niipedbmjiopjpmjcpigiflabghcckeo"
                    // @ts-ignore
                    onClick={
                      !scroll
                        ? () => eventTrack(`button`, `click`, `to_webstore`)
                        : () => eventTrack(`button`, `click`, `to_webstore_sticky`)
                    }
                  >
                    Add to Chrome — it’s free
                  </Button>
                </BigButton>
                <SmallButton>
                  <Button
                    appearanceTransponentBlack="transponentBlack"
                    href="https://chrome.google.com/webstore/detail/breathhh/niipedbmjiopjpmjcpigiflabghcckeo"
                    // @ts-ignore
                    onClick={
                      !scroll
                        ? () => eventTrack(`button`, `click`, `to_webstore`)
                        : () => eventTrack(`button`, `click`, `to_webstore_sticky`)
                    }
                  >
                    Install
                  </Button>
                </SmallButton>
              </div>
            ))}
        </ButtonContainer>
      </Root>
    </>
  )
})
