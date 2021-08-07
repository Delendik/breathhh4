import styled from 'styled-components'
import { RouteComponentProps, Link } from '@reach/router'

import { LayoutCenter } from 'src/components/LayoutCenter'
import { apiUrlFacebook, apiUrlGoogle } from 'src/utils/config'

const Title = styled.h1`
  margin: 0 0 15px;
  color: #3d3a4b;
  font-size: 32px;
  text-align: center;
`

const Subtitle = styled.p`
  color: #615f68;
  font-size: 20px;
  text-align: center;
`

const BtnWrap = styled.div`
  display: grid;
  max-width: 300px;
  margin-right: auto;
  margin-left: auto;
  gap: 12px;
  margin-top: 45px;
`

const Href = styled.a<{ type: 'google' | 'facebook' }>`
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
      type === 'google' && `background: url("/assets/icon-google.svg") 0 0 / cover no-repeat;`}

    ${({ type }) =>
      type === 'facebook' && `background: url("/assets/icon-facebook.svg") 0 0 / cover no-repeat;`}
  }
`

const Footer = styled.div`
  margin: 90px 10px 0;
  color: #71727b;
  text-align: center;

  a {
    color: inherit;
  }
`

export const PageLogin: React.FC<RouteComponentProps> = () => {
  return (
    <LayoutCenter>
      <div>
        <Title>Please login to start Breathhh</Title>
        <Subtitle>This is to fine-tune the beneficial practices specifically for you</Subtitle>
        <BtnWrap>
          <Href type="google" href={apiUrlGoogle}>
            <span>Continue with Google</span>
          </Href>
          <Href type="facebook" href={apiUrlFacebook}>
            <span>Continue with Facebook</span>
          </Href>
        </BtnWrap>
        <Footer>
          By logging in you agree to the personal <Link to="/privacy_policy">privacy policy</Link>{' '}
          and <Link to="/terms_of_use">terms of use</Link>
        </Footer>
      </div>
    </LayoutCenter>
  )
}
