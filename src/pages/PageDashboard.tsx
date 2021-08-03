// import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { observer } from 'mobx-react-lite'
import { UserStore } from 'src/store/UserStore'
import { LayoutCenter } from 'src/components/LayoutCenter'

export const PageDashboard: React.FC<RouteComponentProps> = observer(() => {
  return (
    <LayoutCenter>
      <div>
        {UserStore.engList.map((item) => {
          return (
            <div>
              {item.name} {item.value}
            </div>
          )
        })}
      </div>
    </LayoutCenter>
  )
})
