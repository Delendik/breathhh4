import styled from 'styled-components'
import { media } from 'src/media'

const Root = styled.div`
  font-family: var(--first-second);
  font-weight: 400;
  display: flex;
  justify-content: center;
  margin: 96px auto;
  max-width: 1120px;

  ${media.laptop`
    margin: 68px auto;
  `}

  ${media.tablet`
    margin: 48px auto;
    max-width: 672px;
  `}

  ${media.mobile`
    margin: 48px auto;
    max-width: 320px;
  `}
`

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1120px;
  width: 100%;
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
    animation: animate infinite 2s;
  }

  @keyframes animate {
    from {
      background: no-repeat url(/assets/1.png);
      background-size: cover;
    }
    15% {
      background: no-repeat url(/assets/1.png);
      background-size: cover;
    }
    16% {
      background: no-repeat url(/assets/2.png);
      background-size: cover;
    }
    31% {
      background: no-repeat url(/assets/2.png);
      background-size: cover;
    }
    32% {
      background: no-repeat url(/assets/3.png);
      background-size: cover;
    }
    47% {
      background: no-repeat url(/assets/3.png);
      background-size: cover;
    }
    48% {
      background: no-repeat url(/assets/4.png);
      background-size: cover;
    }
    63% {
      background: no-repeat url(/assets/4.png);
      background-size: cover;
    }
    64% {
      background: no-repeat url(/assets/5.png);
      background-size: cover;
    }
    80% {
      background: no-repeat url(/assets/5.png);
      background-size: cover;
    }
    81% {
      background: no-repeat url(/assets/6.png);
      background-size: cover;
    }
    to {
      background: no-repeat url(/assets/6.png);
      background-size: cover;
    }
  }
  ${media.laptop`
    width: 100%;
    height: 256px;
    font-size: 96px;
  `}

  ${media.mobile`
    height: 112px;
    font-size: 44px;

    :hover {
      animation: none;
    }

    :active {
      background: var(--color-sunrise);
      outline: none;
    }
  `}
  }
`

export const HeroButton: React.FC = () => {
  return (
    <Root>
      <Button
        href="https://chrome.google.com/webstore/detail/breathhh/niipedbmjiopjpmjcpigiflabghcckeo"
        target="blank"
      >
        Get started
      </Button>
    </Root>
  )
}
