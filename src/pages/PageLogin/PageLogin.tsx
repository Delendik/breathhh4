import styled from 'styled-components'
import { RouteComponentProps, Link } from '@reach/router'

import { media } from 'src/media'
import { LayoutBaseWithoutFooter } from 'src/components/LayoutBaseWithoutFooter'
import { apiUrlFacebook, apiUrlGoogle } from 'src/utils/config'
import { Button, Spacer } from 'src/ui/atoms'

const Root = styled.div`
  height: calc(100vh - 89px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.mobile`
  height: calc(100vh - 73px);
  `}
`

const Video = styled.video`
  width: 320px;
  height: 320px;

  ${media.mobile`
    max-width: 320px;
    width: 100%;
  `}
`

const Subtitle = styled.div`
  display: inline-block;
  max-width: 320px;
  color: var(--color-ground-700);
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  font-weight: 500;
`

const WrapButtons = styled.div`
  display: grid;
  gap: 12px;
  width: 320px;
  font-family: inherit;
  font-size: 16px;
  line-height: 25px;
  font-weight: 500;

  ${media.mobile`
    max-width: 320px;
    width: 100%;
  `}
`

const LinkTo = styled(Subtitle)`
  color: var(--color-ground-800);
  &:hover {
    color: var(--color-black);
  }
`
export const PageLogin: React.FC<RouteComponentProps> = () => {
  return (
    <LayoutBaseWithoutFooter hideLogin hideInstall>
      <Root>
        <Video src="assets/signin.mp4" muted autoPlay loop playsInline>
          {/* <source src="video/signin.webm" type='video/webm; codecs="vp8, vorbis"' /> */}
          <source src="assets/signin_ext.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
          Sorry, your browser doesn't support embedded videos.
        </Video>
        <WrapButtons>
          <Button iconLeft="Google" iconSize="20" href={apiUrlGoogle}>
            Continue&nbsp;with&nbsp;Google
          </Button>
          <Button iconLeft="Facebook" iconSize="20" href={apiUrlFacebook}>
            Continue&nbsp;with&nbsp;Facebook
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
