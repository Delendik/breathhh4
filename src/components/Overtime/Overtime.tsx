import styled from 'styled-components'
import { media } from 'src/media'
import { RouteComponentProps } from '@reach/router'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 96px 0;

  ${media.laptop`
    padding: 68px 0;
  `}

  ${media.mobile`
    padding: 48px 0;
  `}
`

const IconWrap = styled.img`
  width: 80px;
  height: 80px;

  ${media.mobile`
    width: 64px;
    height: 64px;
  `}
`

const Title = styled.h1`
  max-width: 675px;
  font-family: NeueMachina;
  font-size: 56px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  margin-top: 34px;
  margin-bottom: 0;

  ${media.laptop`
    width: 100%;
    max-width: 672px;
    font-size: 62px;
    line-height: 64px;
  `}

  ${media.mobile`
    font-size: 42px;
    line-height: 42px;
  `}
`

const Text = styled.p`
  max-width: 600px;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  font-weight: 400;
  margin-top: 16px;

  ${media.mobile`
    font-size: 18px;
    line-height: 26px;
  `}
`

const VisualWrapper = styled.div`
  margin-top: 68px;
  width: 1120px;
  display: -webkit-box;

  ${media.laptop`
    max-width: 672px;
    width: 100%;
  `}

  ${media.mobile`
    overflow: auto;
  `}
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

const BlockLeft = styled.div`
  width: 747px;
  height: 221px;
  border-bottom: 4px solid var(--color-ground-200);
  display: flex;
  flex-direction: column;

  ${media.laptop`
    width: 444px;
    height: 151px;
  `}
`

const BlockRight = styled.div`
  position: relative;
  width: 373px;
  height: 221px;
  border-bottom: 4px solid var(--color-black);

  ${media.laptop`
    width: 224px;
    height: 151px;
  `}
`

const TextHours = styled.p`
  font-family: NeueMachina;
  font-size: 42px;
  line-height: 44px;
  text-align: center;
  font-weight: 400;
  margin-top: 155px;

  ${media.laptop`
    width: 100%;
    max-width: 672px;
    margin-top: 85px;
  `}
`

const TextSubtrack = styled.p<{ bottom: string; right: string; transform: string }>`
  position: absolute;
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  transform: ${(props) => props.transform};
  font-family: NeueMachina;
  font-size: 38px;
  line-height: 95%;
  font-weight: 400;
  padding: 9px 10px 8px;
  border-radius: 16px;
  background-color: var(--color-black);
  color: var(--color-white);

  ${media.laptop`
    display: none;
  `}
`

const TextSubtrackSmall = styled(TextSubtrack)`
  display: none;

  ${media.laptop`
    display: inline;
    font-size: 26px;
    padding: 8px;
  `}
`

const BigGrey = styled.img`
  width: 747px;
  height: 33px;
  margin-top: 10px;

  ${media.laptop`
    display: none;
  `}
`

const SmallGrey = styled(BigGrey)`
  display: none;

  ${media.laptop`
    display: block;
    width: 448px;
    height: 30px;
    object-fit: cover;
  `}
`

const BigBlack = styled.img`
  width: 373px;
  height: 33px;
  margin-top: 10px;

  ${media.laptop`
    display: none;
  `}
`

const SmallBlack = styled(BigBlack)`
  display: none;

  ${media.laptop`
    display: block;
    width: 224px;
    height: 30px;
    object-fit: cover;
  `}
`

const TextVisual = styled.p`
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 16px;

  ${media.mobile`
    font-size: 14px;
    line-height: 14px;
  `}
`

export const Overtime: React.FC<RouteComponentProps> = () => {
  return (
    <Root>
      <IconWrap width="80" height="80" src="/assets/overtime-face.svg" alt="face" />
      <Title>more than 40 hours a week for a PC 40% more often burn out and worry</Title>
      <Text>
        Breathhh provides tools with science-based proven efficacy, synergy and artificial
        intelligence
      </Text>
      <VisualWrapper>
        <Wrap>
          <BlockLeft>
            <TextHours>40 hours</TextHours>
          </BlockLeft>
          <BigGrey width="747" height="33" src="/assets/big-grey.svg" alt="arrow" />
          <SmallGrey width="448" height="30" src="/assets/small-grey.svg" alt="arrow" />
          <TextVisual>work week</TextVisual>
        </Wrap>
        <Wrap>
          <BlockRight>
            <TextSubtrack bottom="-2px" right="96px" transform="rotate(0deg)">
              burnout
            </TextSubtrack>
            <TextSubtrack bottom="28px" right="225px" transform="rotate(-45deg)">
              stress
            </TextSubtrack>
            <TextSubtrack bottom="103px" right="120px" transform="rotate(35deg)">
              depression
            </TextSubtrack>
            <TextSubtrack bottom="43px" right="7px" transform="rotate(55deg)">
              fatigue
            </TextSubtrack>
            <TextSubtrackSmall bottom="-2px" right="51px" transform="rotate(0deg)">
              burnout
            </TextSubtrackSmall>
            <TextSubtrackSmall bottom="17px" right="142px" transform="rotate(-45deg)">
              stress
            </TextSubtrackSmall>
            <TextSubtrackSmall bottom="73px" right="73px" transform="rotate(35deg)">
              depression
            </TextSubtrackSmall>
            <TextSubtrackSmall bottom="28px" right="-10px" transform="rotate(55deg)">
              fatigue
            </TextSubtrackSmall>
          </BlockRight>
          <BigBlack width="373" height="33" src="/assets/big-black.svg" alt="arrow" />
          <SmallBlack width="224" height="30" src="/assets/small-black.svg" alt="arrow" />
          <TextVisual>overtime</TextVisual>
        </Wrap>
      </VisualWrapper>
    </Root>
  )
}
