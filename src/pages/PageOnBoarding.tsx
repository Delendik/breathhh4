import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { LayoutCenter } from '../components/LayoutCenter'
import { Profile } from '../components/Profile'

const Root = styled.div`
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
`

const ProfileWrap = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
`
const Peace = styled.div`
  font-size: 60px;
  text-align: center;
`

const Title = styled.div`
  margin: 0 0 35px;
  font-size: 32px;
  text-align: center;
`

const Images = styled.div`
  filter: drop-shadow(0px 48px 128px rgba(28, 65, 84, 0.12));
`

const ImageTop = styled.div`
  height: 48px;
  width: 622px;
  background: url('/assets/browser-header.png') 0 0 / cover no-repeat;
`

const ImageBottom = styled.div`
  height: 48px;
  width: 622px;
  background: url('/assets/browser-search-bar.png') 0 0 / cover no-repeat;
`

const Subtitle = styled.div`
  margin: 50px 0 0;
  font-size: 20px;
  color: #f6803e;
  text-align: center;
  cursor: pointer;
`

export const PageOnBoarding: React.FC<RouteComponentProps> = () => {
  const handleCloseTab = () => {
    // Scripts may close only the windows that were opened by them.
    window.close()
  }

  return (
    <LayoutCenter>
      <Root>
        <ProfileWrap>
          <Profile />
        </ProfileWrap>
        <Peace>✌️</Peace>
        <Title>
          From time to time when you open the tabs you will see a tool for breathing practice
        </Title>
        <Images>
          <ImageTop />
          <ImageBottom />
        </Images>
        <Subtitle onClick={handleCloseTab}>Close this page and start browser surfing</Subtitle>
      </Root>
    </LayoutCenter>
  )
}
