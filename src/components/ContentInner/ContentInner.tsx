import styled from 'styled-components'

const Root = styled.footer`
  max-width: 860px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
`

export const ContentInner: React.FC = ({ children }) => {
  return <Root>{children}</Root>
}
