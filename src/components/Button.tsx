import styled from 'styled-components'

const Root = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 44px;
  padding: 5px 20px;
  font-size: 15px;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid #71727b;
  border-radius: 4px;
`

export const Button: React.FC = ({ children, ...rest }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Root type="button" {...rest}>
      {children}
    </Root>
  )
}
