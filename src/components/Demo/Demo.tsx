import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import { media } from 'src/media'
import * as icons from 'src/ui/icons'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 96px 0;

  ${media.laptop`
    padding: 68px 0;
  `}

  ${media.tablet`
    padding: 48px 0;
  `}
`

const PictureWrap = styled.div`
  position: relative;
  max-width: 1120px;
  width: 100%;
  height: 680px;
  margin: 0 auto;
  overflow: hidden;
  border: 2px solid var(--color-black);
  box-sizing: border-box;
  border-radius: 34px;

  ${media.laptop`
    max-width: 672px;
    height: 860px;
  `}

  ${media.mobile`
    max-width: 320px;
    height: 500px;
  `}
`

const Picture = styled.div`
  background-image: url('/assets/shapes.png');
  background-size: 550px 1215px;
  background-position: center;
  background-repeat: repeat;
  width: 550px;
  height: 2430px;
  animation: moveSlideshow 16s linear infinite;
  margin: 0 auto;

  ${media.laptop`
    width: 440px;
    background-size: 440px 1215px;
  `}

  ${media.mobile`
    width: 272px;
    background-size: 272px 1215px;
  `}

  @keyframes moveSlideshow {
    0 {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-1215px);
    }
  }
`

const Points = styled.img`
  position: absolute;
  width: 46px;
  height: 10px;
  top: 34px;
  left: 34px;
  z-index: 4;
`

const Cursor = styled.img`
  position: absolute;
  width: 16px;
  height: 25px;
  top: 356px;
  right: 470px;
  z-index: 4;

  ${media.laptop`
    top: 449px;
    right: 236px;
  `}

  ${media.mobile`
    top: 306px;
    right: 116px;
  `}
`

const Title = styled.h1`
  max-width: 600px;
  font-family: NeueMachina;
  font-size: 56px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;

  ${media.laptop`
    max-width: 672px;
    font-size: 62px;
    line-height: 64px;
  `}

  ${media.mobile`
    max-width: 320px;
    font-size: 42px;
    line-height: 44px;
  `}
`

const Text = styled.p`
  max-width: 600px;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  font-weight: 400;
  margin: 16px 0 48px;

  ${media.laptop`
    max-width: 672px;
  `}

  ${media.mobile`
    max-width: 320px;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 34px;
  `}
`

const Head = styled.img`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 100px;
  right: -20px;
  animation: showhead ease-in 1s forwards;

  ${media.laptop`
    width: 250px;
    height: 250px;
    top: 128px;
    right: -15px;
  `}

  ${media.mobile`
    width: 140px;
    height: 140px;
    top: 90px;
    right: -6px;
  `}

  @keyframes showhead {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`

const TextBox = styled.a`
  position: absolute;
  top: 68px;
  right: 242px;
  padding: 12px 16px;
  background: var(--color-black);
  border-radius: 14px;
  opacity: 0;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.2);
  animation: showtext ease-in 1s 1s forwards;

  ${media.laptop`
    top: 96px;
    right: 212px;
  `}

  ${media.mobile`
    padding: 8px 12px;
    top: 68px;
    right: 123px;
  `}

  @keyframes showtext {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover {
    cursor: pointer;
    & > * {
      color: var(--color-ground-200);
    }
    & svg path {
      fill: var(--color-ground-200);
    }
  }

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-top: 16px solid var(--color-black);
    border-left: 16px solid transparent;
    position: absolute;
    bottom: -15px;
    right: 30px;

    ${media.mobile`
      bottom: -9px;
      right: 24px;
  `}
  }
`

const TextLink = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-ground-700);

  ${media.mobile`
    & svg {
        width: 16px;
        height: 16px;
      }
  `}
`

const TextHead = styled.p`
  font-family: NeueMachina;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  color: var(--color-white);

  ${media.mobile`
    font-size: 16px;
    line-height: 22px;
  `}
`

const TextHeadGrey = styled(TextHead)`
  color: inherit;
`

export const Demo: React.FC = () => {
  const watcherRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const options = {
      root: document,
      rootMargin: `-50%`,
      threshold: 0,
    }

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimate(true), 1300)
        }
      })
    }

    const scrollObserver = new IntersectionObserver(callback, options)

    scrollObserver.observe(watcherRef.current)
    return () => {
      scrollObserver.unobserve(headerRef.current)
    }
  }, [headerRef])
  return (
    <>
      <Root>
        <Title>it's close when you really need it</Title>
        <Text>Personal intelligence tailored specifically to you</Text>
        <PictureWrap ref={watcherRef}>
          <Points width="46" height="10" src="/assets/demo-points.svg" alt="points" />
          <Cursor width="16" height="25" src="/assets/cursor.svg" alt="points" />
          <Picture />
          {animate && (
            <>
              <Head width="300" height="300" src="/assets/head.svg" alt="head" />
              <TextBox
                href="https://chrome.google.com/webstore/detail/breathhh/niipedbmjiopjpmjcpigiflabghcckeo"
                target="blank"
              >
                <TextHead>Time to Breathe</TextHead>
                <TextLink>
                  <TextHeadGrey> Start</TextHeadGrey>
                  <icons.ArrowUpRightGrey />
                </TextLink>
              </TextBox>
            </>
          )}
        </PictureWrap>
        <div ref={headerRef} />
      </Root>
    </>
  )
}
