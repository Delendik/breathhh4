import styled from 'styled-components'
import { media } from 'src/media'

const Root = styled.div`
  font-family: var(--first-second);
  font-weight: 400;
  display: flex;
  justify-content: center;
  margin: 96px auto;

  ${media.laptop`
    margin: 68px auto;
  `}

  ${media.tablet`
    margin: 48px auto;
  `}
`

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1120px;
  height: 416px;
  background: var(--color-black);
  border-radius: 500px;
  font-size: 160px;
  line-height: 100%;
  color: var(--color-white);
  text-align: center;
  border: none;
  text-decoration: none;

  :hover {
    cursor: pointer;
    animation: animate infinite 1s;
  }

  @keyframes animate {
    from {
      background: no-repeat url(/assets/1.png);
      background-size: cover;
    }
    20% {
      background: no-repeat url(/assets/2.png);
      background-size: cover;
    }
    40% {
      background: no-repeat url(/assets/3.png);
      background-size: cover;
    }
    60% {
      background: no-repeat url(/assets/4.png);
      background-size: cover;
    }
    80% {
      background: no-repeat url(/assets/5.png);
      background-size: cover;
    }
    to {
      background: no-repeat url(/assets/6.png);
      background-size: cover;
    }
  }
  ${media.laptop`
    width: 672px;
    height: 256px;
    font-size: 96px;
  `}

  ${media.tablet`
    width: 320px;
    height: 112px;
    font-size: 44px;
  `}

  @media (pointer:coarse) {
    width: 320px;
    height: 112px;
    font-size: 44px;

    :hover {
      animation: none;
    }

    :focus {
      background: var(--color-sunrise);
    }
  }
`

export const HeroButton: React.FC = () => {
  return (
    <Root>
      <Button
        href="https://chrome.google.com/webstore/detail/breathhh/niipedbmjiopjpmjcpigiflabghcckeo"
        target="blank"
      >
        {/* <Cards> */}
        Get started
        {/* </Cards> */}
      </Button>
    </Root>
  )
}
