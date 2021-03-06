import styled from 'styled-components'
import { RouteComponentProps, useNavigate } from '@reach/router'
import { observer } from 'mobx-react-lite'

import { UserStore } from 'src/store/UserStore'
import { LayoutBase } from 'src/components/LayoutBase'
import { Button } from 'src/components/Button'
import { apiUrlFacebook, apiUrlGoogle } from 'src/utils/config'

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

const ConnectWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`

const ControlsWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 100px;
`

export const PageAccount: React.FC<RouteComponentProps> = observer(() => {
  const navigate = useNavigate()

  const handleReset = () => {
    UserStore.logout()
    navigate(`/login`, { replace: true })
  }

  const handleDelete = async () => {
    // eslint-disable-next-line no-alert
    const isOk = window.confirm(
      `Do you really want to delete youre account? It will not be possible to undo this action`
    )

    if (isOk) {
      await UserStore.deleteMyAccount()
      navigate(`/`, { replace: true })
    }
  }

  const isGoogleConnected = UserStore.user?.google_connected

  const isFacebookConnected = UserStore.user?.facebook_connected

  return (
    <LayoutBase enableNav showSticky={false}>
      <div>
        <Banner>
          <BannerTitle>{UserStore.user?.name}</BannerTitle>
          <BannerText>{UserStore.user?.id}</BannerText>
        </Banner>

        <ConnectWrap>
          <Button
            active={isGoogleConnected}
            disabled={isGoogleConnected}
            href={isGoogleConnected ? undefined : apiUrlGoogle}
          >
            {isGoogleConnected ? `Connected by` : `Connect`} Gmail
          </Button>
          <Button
            active={isFacebookConnected}
            disabled={isFacebookConnected}
            href={isFacebookConnected ? undefined : apiUrlFacebook}
          >
            {isFacebookConnected ? `Connected by` : `Connect`} Facebook
          </Button>
        </ConnectWrap>

        <ControlsWrap>
          <Button onClick={handleReset}>Logout</Button>
          <Button onClick={handleDelete}>Delete account</Button>
        </ControlsWrap>
      </div>
    </LayoutBase>
  )
})
