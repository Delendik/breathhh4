import styled from 'styled-components'

const Root = styled.div`
  max-width: 865px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: content-box;
`

export const Container: React.FC = ({ children }) => {
  return <Root>{children}</Root>
}
