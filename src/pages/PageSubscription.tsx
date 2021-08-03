// import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { observer } from 'mobx-react-lite'
import { LayoutCenter } from 'src/components/LayoutCenter'

export const PageSubscription: React.FC<RouteComponentProps> = observer(() => {
  return (
    <LayoutCenter>
      <div>
        <div>Basic Subscription</div>
        <div>The product is currently distributed free of charge</div>
      </div>
    </LayoutCenter>
  )
})
