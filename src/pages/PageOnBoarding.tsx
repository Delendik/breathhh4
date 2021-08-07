import styled from 'styled-components'
import { RouteComponentProps, Link } from '@reach/router'
import { observer } from 'mobx-react-lite'

// import { UserStore } from 'src/store/UserStore'
import { Header } from 'src/components/Header'
import { ContentInner } from 'src/components/ContentInner'

const Title = styled.div`
  font-size: 42px;
  line-height: 50px;
`

const WrapBadge = styled.div`
  display: flex;
  justify-content: space-between;
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
  padding: 15px 20px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
`

export const PageOnBoarding: React.FC<RouteComponentProps> = observer(() => {
  return (
    <div>
      <Header hideLogin />
      <ContentInner>
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
        <div>
          <Banner>
            🏁 Now you can close this page. The product is already running automatically.
          </Banner>
        </div>
        <Profile>
          <Link to="/dashboard">Go to my personal space</Link>
        </Profile>
      </ContentInner>
    </div>
  )
})
