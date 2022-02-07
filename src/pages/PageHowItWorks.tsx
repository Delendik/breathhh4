import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { LayoutCenter } from 'src/components/LayoutCenter'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PageHowItWorks: React.FC<RouteComponentProps> = () => {
  return (
    <LayoutCenter>
      <Root>how-it-works</Root>
    </LayoutCenter>
  )
}
