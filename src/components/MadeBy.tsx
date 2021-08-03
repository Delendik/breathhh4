import styled from 'styled-components'
import { yahhtUrl } from 'src/utils/config'

const Root = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  font-size: 14px;
  text-decoration: none;
  transition: 0.3s;

  :hover {
    opacity: 0.8;
  }
`

const IconWrap = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
`

const Made = styled.div`
  margin-bottom: 3px;
  color: #232a34;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
`

const Team = styled.div`
  color: var(--gray);
  font-size: 15px;
  line-height: 20px;
`

export const MadeBy = () => {
  return (
    <Root href={yahhtUrl} target="_blank">
      <IconWrap width="48" height="48" src="/assets/icon-yahht.svg" alt="Yahht Logo" />
      <div>
        <Made>Made by Yahht</Made>
        <Team>A team of independent developers</Team>
      </div>
    </Root>
  )
}
