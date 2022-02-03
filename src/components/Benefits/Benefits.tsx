import styled from 'styled-components'
import { media } from 'src/media'

import * as icons from 'src/ui/icons'

const Root = styled.div`
  font-family: var(--fonts-second);
  margin: 96px auto;

  ${media.laptop`
    margin: 68px auto;
  `}

  ${media.tablet`
    margin: 48px auto;
  `}
`

const Title = styled.h2`
  margin: 0 auto;
  max-width: 700px;
  font-size: 56px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;

  ${media.laptop`
    max-width: 600px;
    font-size: 62px;
    line-height: 64px;
  `}

  ${media.tablet`
    max-width: 320px;
    font-size: 42px;
    line-height: 44px;
  `}
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 48px;

  ${media.laptop`
    gap: 24px;
  `}

  ${media.tablet`
    gap: 20px;
    margin-top: 34px;
  `}
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 265px;
  height: 400px;
  padding: 24px;
  background: var(--color-ground-100);
  border-radius: 34px;

  ${media.laptop`
    width: 324px;
    height: 324px;
  `}

  ${media.tablet`
    width: 320px;
    height: 320px;
  `}
`

const CardBlack = styled(Card)`
  background: var(--color-black);
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CardText = styled.p`
  font-size: 34px;
  line-height: 38px;
  text-transform: uppercase;
  white-space: pre-line;

  ${media.laptop`
    white-space: normal;
  `}

  ${media.tablet`
    font-size: 28px;
    line-height: 32px;
  `}
`

const CardTextWhite = styled(CardText)`
  color: var(--color-white);
`

const CardTextGrey = styled(CardText)`
  color: var(--color-ground-700);
`

const Space = styled.div`
  height: 8px;

  ${media.tablet`
    height: 4px;
  `}
`

export const Benefits: React.FC = () => {
  return (
    <Root>
      <Title>Try a new way to feel  better with Breathhh</Title>
      <Cards>
        <Card>
          <TextWrapper>
            <CardText>easy{`\n`}to use</CardText>
            <Space />
            <CardTextGrey>No need to develop {`\n`} the habit</CardTextGrey>
          </TextWrapper>
          <icons.Stars />
        </Card>
        <Card>
          <TextWrapper>
            <CardText>Freemium {`\n`} Option</CardText>
            <Space />
            <CardTextGrey>
              Can be {`\n`} used free {`\n`} of charge
            </CardTextGrey>
          </TextWrapper>
          <icons.Wallet />
        </Card>
        <Card>
          <TextWrapper>
            <CardText>Adjustable settings</CardText>
            <Space />
            <CardTextGrey>Include what's needed</CardTextGrey>
          </TextWrapper>
          <icons.Moon />
        </Card>
        <CardBlack>
          <TextWrapper>
            <CardTextWhite>Private {`\n`} and secure</CardTextWhite>
            <Space />
            <CardTextGrey>Reliable storage and protection</CardTextGrey>
          </TextWrapper>
          <icons.Lock />
        </CardBlack>
      </Cards>
    </Root>
  )
}
