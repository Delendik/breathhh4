import styled from 'styled-components'

const Root = styled.button<{ active: boolean }>`
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
  cursor: pointer;

  ${({ active }) =>
    active
      ? `
    background-color: #232A34;
    border-color: transparent;
    color: #ffffff;
  `
      : ``}
`

type TProps = {
  active?: boolean
}

export const Button: React.FC<React.ComponentProps<`button`> & TProps> = (props) => {
  const { children, active, ...rest } = props

  return (
    // @ts-ignore
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Root type="button" active={active} {...rest}>
      {children}
    </Root>
  )
}
