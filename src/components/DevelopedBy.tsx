import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`

const IconWrap = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`

export const DevelopedBy = () => {
  return (
    <Root>
      <IconWrap width="24" height="24" src="/assets/icon-yahht.svg" alt="Yahht Logo" />
      <div>Developed by Yahht</div>
    </Root>
  )
}
