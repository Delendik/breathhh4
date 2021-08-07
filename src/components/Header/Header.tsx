import styled from 'styled-components'

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 860px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px;
`

const Title = styled.div`
  font-size: 22px;
`

const Login = styled.div`
  font-size: 22px;
`

export const Header: React.FC = () => {
  return (
    <Root>
      <Title>Breathhh</Title>
      <Login>Log in</Login>
    </Root>
  )
}
