import styled from 'styled-components'
import { RouteComponentProps, Link } from '@reach/router'

import { LayoutBase } from 'src/components/LayoutBase'
import { ContentInner } from 'src/components/ContentInner'
import {
  // apiUrlFacebook,
  apiUrlGoogle,
} from 'src/utils/config'

import iconFlash from './assets/flash_auto_24px.svg'
import iconVerified from './assets/verified_user_24px.svg'

const DATA = [
  {
    title: `Data Protection`,
    text: `We encrypt your data securely. You can always delete them`,
    icon: iconFlash,
  },
  {
    title: `Neural Engine Boosted`,
    text: `Adjusts to you and you see when you need it`,
    icon: iconVerified,
  },
]

const Title = styled.h1`
  margin-top: 70px;
  font-size: 42px;
  line-height: 50px;
`

const Subtitle = styled.p`
  margin-top: 30px;
  color: #71727b;
  font-size: 18px;
  line-height: 24px;
`

const BtnWrap = styled.div`
  display: grid;
  gap: 12px;
  max-width: 276px;
  margin-top: 70px;
`

const Href = styled.a<{ type: `google` | `facebook` }>`
  position: relative;
  padding: 15px 15px 15px 64px;
  color: #3d3a4b;
  font-size: 18px;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);

  &:hover {
    opacity: 0.8;
  }

  &::before {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 24px;
    height: 24px;
    content: '';

    ${({ type }) =>
      type === `google` && `background: url("/assets/icon-google.svg") 0 0 / cover no-repeat;`}

    ${({ type }) =>
      type === `facebook` && `background: url("/assets/icon-facebook.svg") 0 0 / cover no-repeat;`}
  }
`

const WrapBadge = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`

const Badge = styled.div`
  display: flex;
`

const BadgeIcon = styled.div<{ bgi: string }>`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-right: 16px;
  background: #f1f2f2 url(${({ bgi }) => bgi}) center / 24px 24px no-repeat;
  border-radius: 4px;
`

const BadgeTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`

const BadgeText = styled.div`
  color: #71727b;
  font-size: 14px;
  line-height: 24px;
`

export const PageLogin: React.FC<RouteComponentProps> = () => {
  return (
    <LayoutBase>
      <ContentInner>
        <Title>Please authorize to start using</Title>
        <Subtitle>
          This is to fine-tune the beneficial practices specifically for you. By logging in you
          agree to the personal <Link to="/privacy_policy">privacy policy</Link> and{` `}
          <Link to="/terms_of_use">terms of use</Link>
        </Subtitle>
        <WrapBadge>
          {DATA.map((item, index) => {
            return (
              <Badge key={index}>
                <BadgeIcon bgi={item.icon} />
                <div>
                  <BadgeTitle>{item.title}</BadgeTitle>
                  <BadgeText>{item.text}</BadgeText>
                </div>
              </Badge>
            )
          })}
        </WrapBadge>
        <BtnWrap>
          <Href type="google" href={apiUrlGoogle}>
            <span>Continue with Google</span>
          </Href>
          {/* <Href type="facebook" href={apiUrlFacebook}>
            <span>Continue with Facebook</span>
          </Href> */}
        </BtnWrap>
      </ContentInner>
    </LayoutBase>
  )
}
