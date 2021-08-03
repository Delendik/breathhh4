// import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { observer } from 'mobx-react-lite'

import { UserStore } from 'src/store/UserStore'
import { LayoutCenter } from 'src/components/LayoutCenter'
import { Button } from 'src/components/Button'

export const PageAccount: React.FC<RouteComponentProps> = observer(() => {
  return (
    <LayoutCenter>
      <div>
        <div>
          <div>{UserStore.user?.name}</div>
          <div>{UserStore.user?.id}</div>
        </div>
        <div>
          <div>Connected by Gmail</div>
          <div>Connect facebook</div>
        </div>
        <div>
          <Button>Logout</Button>
          <Button>Delete account</Button>
        </div>
      </div>
    </LayoutCenter>
  )
})
