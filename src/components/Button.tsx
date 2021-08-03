import styled from 'styled-components'

const Root = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  min-height: 44px;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid #71727b;
  background-color: transparent;
  font-size: 15px;
  text-transform: uppercase;
  border-radius: 4px;
`

export const Button: React.FC = ({ children, ...rest }) => {
  return (
    <Root type="button" {...rest}>
      {children}
    </Root>
  )
}
