import styled from 'styled-components'
import { yahhtUrl } from '../utils/config'

const Root = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
  color: inherit;
  transition: 0.3s;

  :hover {
    opacity: 0.8;
  }
`

const IconWrap = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`

export const DevelopedBy = () => {
  return (
    <Root href={yahhtUrl} target="_blank">
      <IconWrap width="24" height="24" src="/assets/icon-yahht.svg" alt="Yahht Logo" />
      <span>Developed by Yahht</span>
    </Root>
  )
}
