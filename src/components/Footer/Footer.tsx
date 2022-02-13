import { Link } from '@reach/router'
import styled from 'styled-components'
import { media } from 'src/media'
import { Spacer } from 'src/ui/atoms'

import { yahhtUrl, breathUltima } from 'src/utils/config'

const Root = styled.footer`
  padding-top: 134px;
  padding-bottom: 34px;
  max-width: 1120px;
  width: 1120px;

  & a {
    color: inherit;
    text-decoration: none;
  }

  ${media.laptop`
    width: 100%;
  `}

  ${media.tablet`
    padding-top: 96px;
  `}

  ${media.mobile`
    padding-top: 68px;
    padding-bottom: 24px;
  `}
`

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 115px;

  ${media.laptopX`
    gap: 48px 24px;
  `}

  ${media.mobile`
    gap: 31px;
    max-width: 200px;
    justify-content: center;
    margin: 0 auto;
  `}
`

const InnerDown = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media.mobile`
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  `}

  ${media.mobile`
    margin-top: 3px;
  `}
`

const Space = styled.div<{ height: string }>`
  height: ${(props) => props.height};

  ${media.mobile`
    height: 9px;
  `}
`

const SpaceStatic = styled(Space)`
  ${media.mobile`
    height: 34px;
  `}
`

const Title = styled.div`
  width: 182px;
  height: 13px;
  background: no-repeat url(/assets/logo-breathhh.svg);
  background-size: contain;
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;

  ${media.laptop`
    width: 208px;
  `}

  ${media.pretablet`
    max-width: 208px;
    min-width: 140px;
  `}

  ${media.tablet`
    width: auto;
  `}

  ${media.mobile`
    align-items: center;
  `}
`

const SocialBlock = styled.div`
  display: flex;
  margin-top: -12px;
  margin-left: -12px;

  & > * {
    margin-top: 12px;
    margin-left: 12px;
  }

  ${media.mobile`
    margin-bottom: 3px;
  `}
`

const InfoBlock = styled.div`
  display: flex;
  gap: 34px;
`

const InfoText = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin: 0;
  padding: 0;
  color: var(--color-ground-600);

  ${media.mobile`
    font-size: 16px;
    line-height: 25px;
  `}
`

const InfoTextSmall = styled(InfoText)`
  ${media.tablet`
    font-size: 14px;
    line-height: 22px;
  `}
`

const InfoLink = styled(InfoText)`
  &:hover {
    color: var(--color-ground-800);
  }
`

const InfoLinkSmall = styled(InfoText)`
  &:hover {
    color: var(--color-ground-800);
  }

  ${media.mobile`
    font-size: 14px;
    line-height: 22px;
  `}
`

const Line = styled.div`
  width: 100%;
  border: 1px solid var(--color-ground-100);
  margin-top: 48px;

  ${media.mobile`
    display: none;
  `}
`

const LineSmall = styled.div`
  display: none;
  width: 100%;
  border: 1px solid var(--color-ground-100);
  margin: 24px 0;

  ${media.mobile`
    display: block;
  `}
`

const BlockTitle = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  padding: 0;
  color: var(--color-ground-600);

  ${media.mobile`
    font-size: 16px;
    line-height: 25px;
  `}
`

const BlockLink = styled(BlockTitle)`
  color: var(--color-black);

  &:hover {
    color: var(--color-ground-800);
  }
`

const Badge = styled.a`
  display: flex;
`

const ButtonRound = styled.a<{ bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--app-text-color);
  background-color: var(--color-ground-100);
  background-image: ${(props) => props.bg};
  background-repeat: no-repeat;
  background-position: center;
  padding: 0;
  border: 0px solid red;

  &:hover {
    color: var(--app-text-color);
    background-color: var(--color-ground-200);
    opacity: 1;
  }
`

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <Root>
      <Inner>
        <Block>
          <Title />
          <Spacer s="28" />
          <SocialBlock>
            <ButtonRound
              href="https://www.facebook.com/breathhh.page"
              target="_blank"
              bg="url(/assets/facebook-black.svg)"
            />

            <ButtonRound
              href="https://www.facebook.com/breathhh.page"
              target="_blank"
              bg="url(/assets/twitter.svg)"
            />
            <ButtonRound
              href="https://www.facebook.com/breathhh.page"
              target="_blank"
              bg="url(/assets/medium.svg)"
            />
          </SocialBlock>
        </Block>
        <Inner>
          <Block>
            <BlockTitle>PRODUCT</BlockTitle>
            <Space height="18px" />
            <Link to="/how-it-works" target="_blank">
              <BlockLink>How it works</BlockLink>
            </Link>
            <Space height="12px" />
            <Badge href={breathUltima} target="_blank">
              <BlockLink>Breathhh Ultima</BlockLink>
            </Badge>
          </Block>
          <Block>
            <BlockTitle>COMPANY</BlockTitle>
            <Space height="18px" />
            <Link to="/about">
              <BlockLink>About</BlockLink>
            </Link>
            <Space height="12px" />
            <Link to="/partnership">
              <BlockLink>For partnership</BlockLink>
            </Link>
          </Block>
          <Block>
            <BlockTitle>HELP</BlockTitle>
            <Space height="18px" />
            <Link to="/faq">
              <BlockLink>FAQs</BlockLink>
            </Link>
            <Space height="12px" />
            <Link to="/contacts">
              <BlockLink>Contacts</BlockLink>
            </Link>
          </Block>
        </Inner>
      </Inner>
      <Line />
      <SpaceStatic height="34px" />
      <InnerDown>
        <InfoBlock>
          <InfoTextSmall>© 2021 - {year}, Breathhh</InfoTextSmall>
          <Badge href={yahhtUrl} target="_blank">
            <InfoLinkSmall>Developed by Yahht</InfoLinkSmall>
          </Badge>
        </InfoBlock>
        <LineSmall />
        <InfoBlock>
          <Link to="/terms_of_use">
            <InfoLink>Terms of Use</InfoLink>
          </Link>
          <Link to="/privacy_policy">
            <InfoLink>Privacy Policy</InfoLink>
          </Link>
        </InfoBlock>
      </InnerDown>
    </Root>
  )
}
