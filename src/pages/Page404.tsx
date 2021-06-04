import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { LayoutCenter } from '../components/LayoutCenter'

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Page404: React.FC<RouteComponentProps> = () => {
  return (
    <LayoutCenter>
      <Root>404</Root>&nbsp;<Root>Not Found</Root>
    </LayoutCenter>
  )
}
