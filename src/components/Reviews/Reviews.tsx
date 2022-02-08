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

  ${media.laptop`
    margin: 68px auto;
    gap: 100px;
  `}

  ${media.tablet`
    margin: 48px auto;
    gap: 72px;
  `}
`

const ReviewBlock = styled.div`
  max-width: 550px;
  width: 100%;

  ${media.laptop`
    max-width: 672px;
  `}

  ${media.tablet`
    max-width: 320px;
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

  ${media.tablet`
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

  ${media.tablet`
    font-size: 16px;
    line-height: 16px;
  `}
`

const BlockWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 50% 50%;

  ${media.laptop`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 34px;
    width: 100%;
  `}

  ${media.tablet`
    gap: 24px;
  `}
`

const BlockWrapperReverse = styled(BlockWrapper)`
  ${media.laptop`
    flex-direction: column-reverse;
  `}
`

const Picture = styled.img`
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

  ${media.laptop`
    width: 100%;
    max-width: 672px;
    max-height: 500px;
    margin: 0;
  `}

  ${media.tablet`
    max-width: 320px;
    max-height: 400px;
  `}
`

const PictureRight = styled(Picture)`
  margin-left: 0;
  margin-right: -400px;

  ${media.laptop`
    width: 100%;
    margin: 0;
  `}
`

export const Reviews: React.FC = () => {
  return (
    <Root>
      <BlockWrapper>
        {/* width="950" height="600" */}
        <Picture src="/assets/evgeny.png" alt="evgeny" />
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
          <icons.TwitterGrey />
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
          <icons.TwitterGrey />
        </ReviewBlock>
        <PictureRight src="/assets/evgeny.png" alt="evgeny" />
      </BlockWrapperReverse>
      <BlockWrapper>
        <Picture src="/assets/kacey.png" alt="evgeny" />
        <ReviewBlock>
          <ReviewText>
            “When the pandemic hit, {`\n`} those of us who thrive on {`\n`} in-person collaboration
            {`\n`} were worried that our {`\n`} creativity and {`\n`} productivity would {`\n`}
            suffer”
          </ReviewText>
          <icons.Mc />
          <ReviewName>Kacey Gillar</ReviewName>
          <ReviewInfo>Accounting Assistant</ReviewInfo>
          <icons.TwitterGrey />
        </ReviewBlock>
      </BlockWrapper>
    </Root>
  )
}
