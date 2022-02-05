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
    animation: animate infinite 2s;
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
// const Cards = styled.div`
//   width: 100%;
//   height: 100%;

//   :hover {
//     cursor: pointer;
//     animation: animate linear 5s;
//     color: green;
//   }

//   @keyframes animate {
//     from {
//       background: no-repeat url(/assets/1.png);
//     }
//     20% {
//       background: no-repeat url(/assets/2.png);
//     }
//     40% {
//       background: no-repeat url(/assets/3.png);
//     }
//     60% {
//       background: no-repeat url(/assets/4.png);
//     }
//     80% {
//       background: no-repeat url(/assets/5.png);
//     }
//     to {
//       background: no-repeat url(/assets/6.png);
//     }
//   }
// `
// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   box-sizing: border-box;
//   width: 265px;
//   height: 400px;
//   padding: 24px;
//   background: var(--color-ground-100);
//   border-radius: 34px;

//   ${media.laptop`
//     width: 324px;
//     height: 324px;
//   `}

//   ${media.tablet`
//     width: 320px;
//     height: 320px;
//   `}
// `

// const CardBlack = styled(Card)`
//   background: var(--color-black);
// `

// const TextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `

// const CardText = styled.p`
//   font-size: 34px;
//   line-height: 38px;
//   text-transform: uppercase;
//   white-space: pre-line;

//   ${media.laptop`
//     white-space: normal;
//   `}

//   ${media.tablet`
//     font-size: 28px;
//     line-height: 32px;
//   `}
// `

// const CardTextWhite = styled(CardText)`
//   color: var(--color-white);
// `

// const CardTextGrey = styled(CardText)`
//   color: var(--color-ground-700);
// `

// const Space = styled.div`
//   height: 8px;

//   ${media.tablet`
//     height: 4px;
//   `}
// `

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
