import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { observer } from 'mobx-react-lite'

import { LayoutBase } from 'src/components/LayoutBase'
import { ContentInner } from 'src/components/ContentInner'

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

export const PageSubscription: React.FC<RouteComponentProps> = observer(() => {
  return (
    <LayoutBase enableNav>
      <ContentInner>
        <Banner>
          <BannerTitle>Basic Subscription</BannerTitle>
          <BannerText>The product is currently distributed free of charge</BannerText>
        </Banner>
      </ContentInner>
    </LayoutBase>
  )
})
