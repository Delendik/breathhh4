import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { observer } from 'mobx-react-lite'

import { UserStore } from 'src/store/UserStore'
import { LayoutBase } from 'src/components/LayoutBase'
import { ContentInner } from 'src/components/ContentInner'

const WrapRow = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 50px;
`

const Row = styled.div`
  display: flex;
  align-items: flex-start;
`

const RowText = styled.div`
  display: flex;
  justify-content: space-between;
`

const RowContent = styled.div`
  width: 100%;
  max-width: 374px;
`

const RowTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`

const RowIndex = styled.div`
  min-width: 20px;
  padding: 3px;
  text-align: center;
  background: #f1f2f2;
  border-radius: 4px;
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

const Progress = styled.div<{ color: string; progress: number | null }>`
  position: relative;
  width: 100%;
  height: 5px;
  margin-top: 10px;
  background-color: #f3f3f3;
  border-radius: 2px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ progress }) => (progress ? progress * 10 : 0)}%;
    height: 100%;
    background-color: ${({ color }) => color};
    border-radius: 2px;
    content: '';
  }
`

const Input = styled.input`
  min-width: 20px;
  margin-left: 10px;
  padding: 3px;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  text-align: center;
  background-color: #f1f2f2;
  border: 0;
  border-radius: 4px;
`

const MIN_ENGAGEMENT = 0
const MAX_ENGAGEMENT = 10

export const PageDashboard: React.FC<RouteComponentProps> = observer(() => {
  return (
    <LayoutBase enableNav>
      <ContentInner>
        <Banner>
          <BannerTitle>Here is your engagement when surfing the web</BannerTitle>
          <BannerText>
            You can estimate how much attention you devote to certain websites
          </BannerText>
        </Banner>
        <WrapRow>
          {UserStore.engList.map((item) => {
            return (
              <Row key={item.category_id}>
                <RowContent>
                  <RowText>
                    <RowTitle>{item.category_title}</RowTitle>
                    <RowIndex>{item.engagement ?? `-`}</RowIndex>
                  </RowText>
                  <Progress color={item.color} progress={item.engagement} />
                </RowContent>

                <Input
                  min={MIN_ENGAGEMENT}
                  max={MAX_ENGAGEMENT}
                  value={item.limit}
                  type="number"
                  onChange={async (event) => {
                    const { value } = event.target

                    if (value && +value >= MIN_ENGAGEMENT && +value <= MAX_ENGAGEMENT) {
                      await UserStore.patchCategories(item.category_id, +value)
                    }
                  }}
                />
              </Row>
            )
          })}
        </WrapRow>
      </ContentInner>
    </LayoutBase>
  )
})
