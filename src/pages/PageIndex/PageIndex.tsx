import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { chromeExtUrl } from 'src/utils/config'

import iconSimulator from './assets/icon-breathing-simulator.svg'
import iconEngagement from './assets/icon-engagement.svg'
import iconMood from './assets/icon-mood-pick.svg'
import iconWarm from './assets/icon-warm-ups.svg'

const DATA = [
  {
    title: 'Breathing Sumulator',
    text: 'Box Breathing to relax and take a break while working',
    icon: iconSimulator,
  },
  {
    title: 'Mood Picker',
    text: 'To pay attention to your mental state',
    icon: iconMood,
  },
  {
    title: 'Warm-Ups',
    text: 'Stretch your eyes, neck, and back from time to time',
    icon: iconWarm,
  },
  {
    title: 'Engagement',
    text: 'Find out your categories engagement when web surfing',
    icon: iconEngagement,
  },
]

const Content = styled.div`
  max-width: 864px;
  margin-top: 72px;
  margin-right: auto;
  margin-bottom: 180px;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
`

const Title = styled.h1`
  margin: 0 0 40px;
  font-weight: normal;
  font-size: 64px;
  line-height: 72px;
  text-align: center;
`

const Subtitle = styled.div`
  color: #71727b;
  font-size: 18px;
  text-align: center;
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 120px;
`

const Href = styled.a`
  display: inline-flex;
  padding: 12px 24px;
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
  background-color: #eb6135;
  border-radius: 4px;
  box-shadow: 0 2px 0 #d33f32;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: -60px;

  & > * {
    margin-top: 60px;
  }
`

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 244px;
  text-align: center;
`

const BenefitImage = styled.div<{ bgi: string }>`
  width: 64px;
  height: 64px;
  background-image: url(${({ bgi }) => bgi});
  background-position: center;
  background-size: cover;
`

const BenefitTitle = styled.div`
  margin-top: 77px;
  font-weight: 500;
  font-size: 20px;
`

const BenefitText = styled.div`
  margin-top: 25px;
  color: #666770;
  font-size: 16px;
`

export const PageIndex: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <Header />
      <Content>
        <Title>Keep a cool head and stay open-minded while working</Title>
        <Subtitle>A browser extension to help reduce stress and make you more efficient</Subtitle>
        <ButtonWrap>
          <Href href={chromeExtUrl}>Add to Chrome — it’s Free</Href>
        </ButtonWrap>
        <BenefitsContainer>
          {DATA.map((item, index) => {
            return (
              <Benefit key={index}>
                <BenefitImage bgi={item.icon} />
                <BenefitTitle>{item.title}</BenefitTitle>
                <BenefitText>{item.text}</BenefitText>
              </Benefit>
            )
          })}
        </BenefitsContainer>
      </Content>
      <Footer />
    </div>
  )
}
