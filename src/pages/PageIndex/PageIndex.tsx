import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'

import { LayoutBase } from 'src/components/LayoutBase'
import { Reviews } from 'src/components/Reviews'
import { Benefits } from 'src/components/Benefits'
import { HeroButton } from 'src/components/HeroButton'

const Content = styled.div`
  margin: 0 auto;
`

export const PageIndex: React.FC<RouteComponentProps> = () => {
  return (
    <LayoutBase>
      <Content>
        <Reviews />
        <Benefits />
        <HeroButton />
      </Content>
    </LayoutBase>
  )
}
