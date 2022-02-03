import { useEffect } from 'react'
import styled from 'styled-components'
import { RouteComponentProps, Link } from '@reach/router'
import { observer } from 'mobx-react-lite'

import { UserStore } from 'src/store/UserStore'
import { LayoutBaseWithoutFooter } from 'src/components/LayoutBaseWithoutFooter'

const Title = styled.div`
  margin-top: 70px;
  font-size: 42px;
  line-height: 50px;
`

const WrapBadge = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

const BadgeTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`

const BadgeSubtitle = styled.div`
  margin-top: 16px;
  color: #71727b;
  font-size: 16px;
  line-height: 24px;
`

const BannerWrap = styled.div`
  margin-top: 50px;
`

const Banner = styled.div`
  padding: 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  background-color: #ffeacb;
  border-radius: 8px;
`

const Profile = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 65px;
  padding: 15px 20px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);

  & img {
    margin-right: 15px;
    border-radius: 50%;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
`

export const PageOnBoarding: React.FC<RouteComponentProps> = observer(() => {
  useEffect(() => {
    if (UserStore.showOnboarding) {
      UserStore.completeOnboarding()
    }
  }, [])
  return (
    <LayoutBaseWithoutFooter hideLogin>
      <div>
        <Title>How it works</Title>
        <WrapBadge>
          <div>
            <BadgeTitle>Extension</BadgeTitle>
            <BadgeSubtitle>
              In the extension window you can enable or disable the necessary options
            </BadgeSubtitle>
          </div>
          <div>
            <BadgeTitle>Standalone Tabs</BadgeTitle>
            <BadgeSubtitle>
              From time to time you will automatically receive breathing simulator, mood picker, and
              warm-ups
            </BadgeSubtitle>
          </div>
        </WrapBadge>
        <BannerWrap>
          <Banner>
            🏁 Now you can close this page. The product is already running automatically.
          </Banner>
        </BannerWrap>
        <Profile>
          <img width="24" height="24" src={UserStore.avatar} alt="avatar" />
          <Link to="/dashboard">Go to my personal space</Link>
        </Profile>
      </div>
    </LayoutBaseWithoutFooter>
  )
})
