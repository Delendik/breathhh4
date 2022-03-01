import styled from 'styled-components'
import { media } from 'src/media'
import { RouteComponentProps } from '@reach/router'

import { LayoutBase } from 'src/components/LayoutBase'
import { Reviews } from 'src/components/Reviews'
import { Benefits } from 'src/components/Benefits'
import { HeroButton } from 'src/components/HeroButton'
import { Demo } from 'src/components/Demo'

const Content = styled.div`
  margin: 0;

  ${media.mobile`
    max-width: 320px;
  `}
`

export const PageIndex: React.FC<RouteComponentProps> = () => {
  return (
    <LayoutBase>
      <Content>
        <Reviews />
        <Benefits />
        <Demo />
        <HeroButton />
      </Content>
    </LayoutBase>
  )
}
