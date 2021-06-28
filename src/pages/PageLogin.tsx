import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { LayoutCenter } from '../components/LayoutCenter'
import { apiUrlFacebook, apiUrlGoogle } from '../utils/config'

const Title = styled.h1`
  font-size: 32px;
  color: #3d3a4b;
  text-align: center;
  margin: 0 0 15px;
`

const Subtitle = styled.p`
  font-size: 20px;
  color: #615f68;
  text-align: center;
`

const BtnWrap = styled.div`
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  gap: 12px;
  margin-top: 45px;
`

const Href = styled.a<{ type: 'google' | 'facebook' }>`
  position: relative;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  font-size: 18px;
  color: #3d3a4b;
  padding: 15px 15px 15px 64px;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    width: 24px;
    height: 24px;

    ${({ type }) =>
      type === 'google' && `background: url("/assets/icon-google.svg") 0 0 / cover no-repeat;`}

    ${({ type }) =>
      type === 'facebook' && `background: url("/assets/icon-facebook.svg") 0 0 / cover no-repeat;`}
  }
`

const Footer = styled.div`
  text-align: center;
  margin: 90px 10px 0;
  color: #71727b;

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
          By logging in you agree to the personal <a href="/privacy_policy">privacy policy</a> and{' '}
          <a href="/terms_of_use">terms of use</a>
        </Footer>
      </div>
    </LayoutCenter>
  )
}
