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
  margin-bottom: 21px;

  ${media.laptop`
    margin-bottom: 20px;
  `}

  ${media.tablet`
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 18px;
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
  object-fit: cover;
  margin-left: -400px;

  ${media.laptop`
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
    margin: 0;
  `}
`

export const Reviews: React.FC = () => {
  return (
    <Root>
      <BlockWrapper>
        <Picture width="950" height="600" src="/assets/evgeny.png" alt="evgeny" />
        <ReviewBlock>
          <ReviewText>
            “Breathhh is not only {`\n`} a digital whiteboard but a breakthrough application of a
            what whiteboards can be in the digital age”
          </ReviewText>
          <icons.Stars />
          <ReviewName>Evgeny Kasyanov</ReviewName>
          <ReviewInfo>
            Member of the Russian National Consortium for Psychiatric Genetics
          </ReviewInfo>
          <icons.Twitter />
        </ReviewBlock>
      </BlockWrapper>
      <BlockWrapperReverse>
        <ReviewBlock>
          <ReviewText>
            “Breathhh is not only {`\n`} a digital whiteboard but a breakthrough application of a
            what whiteboards can be in the digital age”
          </ReviewText>
          <icons.Stars />
          <ReviewName>Evgeny Kasyanov</ReviewName>
          <ReviewInfo>
            Member of the Russian National Consortium for Psychiatric Genetics
          </ReviewInfo>
          <icons.Twitter />
        </ReviewBlock>
        <PictureRight width="950" height="600" src="/assets/evgeny.png" alt="evgeny" />
      </BlockWrapperReverse>
      <BlockWrapper>
        <Picture width="950" height="600" src="/assets/evgeny.png" alt="evgeny" />
        <ReviewBlock>
          <ReviewText>
            “Breathhh is not only {`\n`} a digital whiteboard but a breakthrough application of a
            what whiteboards can be in the digital age”
          </ReviewText>
          <icons.Stars />
          <ReviewName>Evgeny Kasyanov</ReviewName>
          <ReviewInfo>
            Member of the Russian National Consortium for Psychiatric Genetics
          </ReviewInfo>
          <icons.Twitter />
        </ReviewBlock>
      </BlockWrapper>
    </Root>
  )
}
