import styled from 'styled-components'
import { media } from 'src/media'

import * as icons from 'src/ui/icons'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 96px;
  font-family: var(--fonts-second);
  margin: 96px -400px;

  @media (max-width: 1940px) {
    margin: 96px 0;
  }

  @media (max-width: 1325px) {
    margin: 68px auto;
    gap: 100px;
  }

  ${media.tablet`
    margin: 48px auto;
    gap: 72px;
  `}
  ${media.mobile`
    max-width: 320px;
  `}
`

const ReviewBlock = styled.div`
  width: 100%;

  @media (max-width: 1325px) {
    max-width: 672px;
  }

  ${media.tablet`
    width: 100%;
  `}
`

const ReviewText = styled.p`
  font-size: 42px;
  line-height: 50px;
  margin-bottom: 48px;
  white-space: pre-line;

  ${media.laptop`
    margin-bottom: 24px;
  `}

  ${media.tablet`
    white-space: normal;
  `}

  ${media.mobile`
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 18px;
  `}
`

const ReviewName = styled.p`
  font-size: 24px;
  line-height: 28px;
  margin-top: 24px;
  margin-bottom: 6px;

  ${media.laptop`
    margin-top: 18px;
  `}

  ${media.mobile`
    font-size: 16px;
    line-height: 16px;
    margin-top: 16px;
    margin-bottom: 8px;
  `}
`

const ReviewInfo = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: var(--color-ground-700);
  margin-bottom: 12px;

  ${media.mobile`
    font-size: 16px;
    line-height: 16px;
  `}
`

const BlockWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 50% 50%;
  max-width: 1120px;

  @media (max-width: 1325px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 34px;
    width: 100%;
  }

  ${media.mobile`
    gap: 24px;
  `}

  /* @supports not (gap: 34px) {
    /* margin: 24; */
    /* background: red; */
  /* } */ */
`

const BlockWrapperReverse = styled(BlockWrapper)`
  ${media.laptop`
    flex-direction: column-reverse;
  `}
`
// const WrapPicture = styled.div`
//   width: 550px;
//   height: 100%;
//   position: relative;

//   /* ${media.laptop`
//     max-width: 672px;
//   `}

//   ${media.tablet`
//     width: 100%;
//   `} */
// `

const Picture = styled.img`
  /* position: absolute; */
  right: 0;
  max-width: 950px;
  max-height: 600px;
  object-fit: cover;
  margin-left: -400px;
  width: 950px;
  height: 600px;

  @media (max-width: 1940px) {
    width: calc(100vw / 2);
    height: 100%;
    margin-left: calc(-100vw / 2 + 560px);
  }

  @media (max-width: 1325px) {
    width: 100%;
    max-width: 672px;
    max-height: 500px;
    margin: 0;
  }

  ${media.tablet`
    width: 100%;
    max-height: 400px;
  `}
`

const PictureRight = styled(Picture)`
  margin-left: 0;
  margin-right: -400px;
  left: 0;

  @media (max-width: 1325px) {
    width: 100%;
    margin: 0;
  }
`

const Icon = styled.a`
  &:hover {
    cursor: pointer;
    & path {
      fill: var(--color-ground-700);
    }
  }
`

export const Reviews: React.FC = () => {
  return (
    <Root>
      <BlockWrapper>
        {/* width="950" height="600" */}
        {/* <WrapPicture> */}
        <Picture src="/assets/evgeny.png" alt="evgeny" />
        {/* </WrapPicture> */}
        <ReviewBlock>
          <ReviewText>
            “Breathhh is not only {`\n`} a digital whiteboard but {`\n`} a breakthrough {`\n`}
            application of a what {`\n`} whiteboards can {`\n`} be in the digital age”
          </ReviewText>
          <icons.Kasyanov />
          <ReviewName>Evgeny Kasyanov</ReviewName>
          <ReviewInfo>
            Member of the Russian National {`\n`} Consortium for Psychiatric Genetics
          </ReviewInfo>
          <Icon href="https://twitter.com/BreathhhApp" target="blank">
            <icons.TwitterGrey />
          </Icon>
        </ReviewBlock>
      </BlockWrapper>
      <BlockWrapperReverse>
        <ReviewBlock>
          <ReviewText>
            “Breathhh is not only {`\n`} a digital whiteboard but {`\n`} a breakthrough {`\n`}
            application of a what {`\n`} whiteboards can {`\n`} be in the digital age”
          </ReviewText>
          <icons.Kasyanov />
          <ReviewName>Evgeny Kasyanov</ReviewName>
          <ReviewInfo>
            Member of the Russian National {`\n`} Consortium for Psychiatric Genetics
          </ReviewInfo>
          <Icon href="https://twitter.com/BreathhhApp" target="blank">
            <icons.TwitterGrey />
          </Icon>
        </ReviewBlock>
        {/* <WrapPicture> */}
        <PictureRight src="/assets/evgeny.png" alt="evgeny" />
        {/* </WrapPicture> */}
      </BlockWrapperReverse>
      <BlockWrapper>
        {/* <WrapPicture> */}
        <Picture src="/assets/kacey.png" alt="evgeny" />
        {/* </WrapPicture> */}
        <ReviewBlock>
          <ReviewText>
            “When the pandemic hit, {`\n`} those of us who thrive on {`\n`} in-person collaboration
            {`\n`} were worried that our {`\n`} creativity and {`\n`} productivity would {`\n`}
            suffer”
          </ReviewText>
          <icons.Mc />
          <ReviewName>Kacey Gillar</ReviewName>
          <ReviewInfo>Accounting Assistant</ReviewInfo>
          <Icon href="https://twitter.com/BreathhhApp" target="blank">
            <icons.TwitterGrey />
          </Icon>
        </ReviewBlock>
      </BlockWrapper>
    </Root>
  )
}
