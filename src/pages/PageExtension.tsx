import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { LayoutCenter } from 'src/components/LayoutCenter'

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PageExtension: React.FC<RouteComponentProps> = () => {
  window.location.href = `https://chrome.google.com/webstore/detail/breathhh-mental-rejuvenat/niipedbmjiopjpmjcpigiflabghcckeo`
  return (
    <LayoutCenter>
      <Root>404</Root>&nbsp;<Root>Not Found</Root>
    </LayoutCenter>
  )
}
