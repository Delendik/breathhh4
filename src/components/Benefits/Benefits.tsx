import styled from 'styled-components'
import { media } from 'src/media'

import { Spacer } from 'src/ui/atoms'

import * as icons from 'src/ui/icons'

const Root = styled.div`
  font-family: var(--fonts-second);
  margin: 0 auto;
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
`

const CardTextWhite = styled(CardText)`
  color: var(--color-white);
`

const CardTextGrey = styled(CardText)`
  color: var(--color-ground-700);
`

// const Avatar = styled.img`
//   width: 45px;
//   height: 45px;
//   border-radius: 50%;
// `
// const SmallButton = styled.div`
//   display: none;

//   ${media.tablet`
//     display: block;
//   `}
// `

export const Benefits: React.FC = () => {
  return (
    <Root>
      <Spacer s="96" />
      <Title>Try a new way to feel  better with Breathhh</Title>
      <Spacer s="48" />
      <Cards>
        <Card>
          <TextWrapper>
            <CardText>easy {`\n`} to use</CardText>
            <Spacer s="8" />
            <CardTextGrey>No need to develop {`\n`} the habit</CardTextGrey>
          </TextWrapper>
          <icons.Stars />
        </Card>
        <Card>
          <TextWrapper>
            <CardText>Freemium {`\n`} Option</CardText>
            <Spacer s="8" />
            <CardTextGrey>
              Can be {`\n`} used free {`\n`} of charge
            </CardTextGrey>
          </TextWrapper>
          <icons.Wallet />
        </Card>
        <Card>
          <TextWrapper>
            <CardText>Adjustable settings</CardText>
            <Spacer s="8" />
            <CardTextGrey>Include what's needed</CardTextGrey>
          </TextWrapper>
          <icons.Moon />
        </Card>
        <CardBlack>
          <TextWrapper>
            <CardTextWhite>Private {`\n`} and secure</CardTextWhite>
            <Spacer s="8" />
            <CardTextGrey>Reliable storage and protection</CardTextGrey>
          </TextWrapper>
          <icons.Lock />
        </CardBlack>
      </Cards>
    </Root>
  )
}
