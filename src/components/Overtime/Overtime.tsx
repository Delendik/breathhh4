import styled from 'styled-components'
import { media } from 'src/media'
import { RouteComponentProps } from '@reach/router'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IconWrap = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 96px;

  ${media.laptop`
    margin-top: 68px;
  `}

  ${media.mobile`
    width: 64px;
    height: 64px;
    margin-top: 48px;
  `}
`

const Title = styled.h1`
  max-width: 675px;
  font-family: NeueMachina;
  font-size: 56px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  margin-top: 34px;
  margin-bottom: 0;

  ${media.laptop`
    width: 100%;
    max-width: 672px;
    font-size: 62px;
    line-height: 64px;
  `}

  ${media.mobile`
    font-size: 42px;
    line-height: 42px;
  `}
`

const Text = styled.p`
  max-width: 600px;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  font-weight: 400;
  margin-top: 16px;

  ${media.mobile`
    font-size: 18px;
    line-height: 26px;
  `}
`

const ImgWrapper = styled.div`
  width: 1120px;
  height: 150px;
  overflow: auto;

  ${media.laptop`
    max-width: 672px;
    width: calc(100%  + 40px);
  `}
`
const Block = styled.div`
  width: 1120px;
  height: 50px;
  margin-left: 20px;
  margin-right: 20px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 121, 83, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  ${media.laptop`
    width: 672px;
  `}
`

export const Overtime: React.FC<RouteComponentProps> = () => {
  return (
    <Root>
      <IconWrap width="80" height="80" src="/assets/overtime-face.svg" alt="face" />
      <Title>more than 40 hours a week for a PC 40% more often burn out and worry</Title>
      <Text>
        Breathhh provides tools with science-based proven efficacy, synergy and artificial
        intelligence
      </Text>
      <ImgWrapper>
        <Block />
      </ImgWrapper>
    </Root>
  )
}
