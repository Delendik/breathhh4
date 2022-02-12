import styled from 'styled-components'
import { RouteComponentProps, Link } from '@reach/router'
import ReactPlayer from 'react-player'

import { LayoutBase } from 'src/components/LayoutBase'
import { LayoutBaseWithoutFooter } from 'src/components/LayoutBaseWithoutFooter'
import { ContentInner } from 'src/components/ContentInner'
import { apiUrlFacebook, apiUrlGoogle } from 'src/utils/config'
import { Button, Spacer } from 'src/ui/atoms'

import iconFlash from './assets/flash_auto_24px.svg'
import iconVerified from './assets/verified_user_24px.svg'

const Root = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Video = styled.video`
  width: 320px;
  height: 320px;
`

const Subtitle = styled.div`
  display: inline-block;
  max-width: 320px;
  color: var(--color-ground-700);
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  font-weight: 400;
`

const WrapButtons = styled.div`
  display: grid;
  gap: 12px;
`

const LinkTo = styled(Subtitle)`
  color: var(--color-ground-800);
  &:hover {
    color: var(--color-black);
  }
`
export const PageLogin: React.FC<RouteComponentProps> = () => {
  return (
    <LayoutBaseWithoutFooter hideLogin>
      <Root>
        <Video src="assets/signin.mp4" autoPlay loop>
          <track default kind="captions" />
          Sorry, your browser doesn't support embedded videos.
        </Video>
        {/* <ReactPlayer url="assets/signin.mp4" loop preload="auto" /> */}
        <WrapButtons>
          <Button type="button" iconLeft="Google" iconSize="20" href={apiUrlGoogle}>
            Sign&nbsp;in&nbsp;with&nbsp;Google
          </Button>
          <Button type="button" iconLeft="Facebook" iconSize="20" href={apiUrlFacebook}>
            Sign&nbsp;in&nbsp;with&nbsp;Facebook
          </Button>
        </WrapButtons>
        <Spacer s="24" />
        <Subtitle>
          You acknowledge that you read, and agree to {`\n`}
          <Link to="/privacy_policy">
            <LinkTo>privacy policy</LinkTo>
          </Link>
          {` `}
          and{` `}
          <Link to="/terms_of_use">
            <LinkTo>terms of use</LinkTo>
          </Link>
        </Subtitle>
      </Root>
    </LayoutBaseWithoutFooter>
  )
}
