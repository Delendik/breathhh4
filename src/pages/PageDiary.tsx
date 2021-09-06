import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { observer } from 'mobx-react-lite'
import dayjs from 'dayjs'

import { useMoodRates } from 'src/store/UserStore'
import { LayoutBase } from 'src/components/LayoutBase'
import { ContentInner } from 'src/components/ContentInner'

const WrapRow = styled.div`
  display: grid;
  gap: 20px;
  max-width: 374px;
  margin-top: 50px;
`

const RowTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`

const Banner = styled.div`
  margin-top: 70px;
  padding: 12px 16px;
  background: #f1f2f2;
  border-radius: 6px;
`

const BannerTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`

const BannerText = styled.div`
  margin-top: 8px;
  color: #71727b;
  font-size: 16px;
  line-height: 20px;
`

const moodMap = [`😰`, `😒`, `😐`, `🙂`, `😁`] as const

export const PageDiary: React.FC<RouteComponentProps> = observer(() => {
  const { moodRates } = useMoodRates()

  return (
    <LayoutBase enableNav>
      <ContentInner>
        <Banner>
          <BannerTitle>Mood Diary</BannerTitle>
          <BannerText>Here you can see your moods in dynamics</BannerText>
        </Banner>
        <WrapRow>
          {moodRates.map((mood) => {
            return (
              <RowTitle>
                {dayjs(mood.date).format(`MMMM DD`)}: {moodMap[mood.rate - 1]}
              </RowTitle>
            )
          })}
        </WrapRow>
      </ContentInner>
    </LayoutBase>
  )
})
