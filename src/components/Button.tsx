import styled from 'styled-components'

const Root = styled.button<{ active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 44px;
  padding: 5px 20px;
  color: #000000;
  font-size: 15px;
  text-transform: uppercase;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid #71727b;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  ${({ active }) =>
    active
      ? `
    background-color: #232a34;
    border-color: transparent;
    color: #ffffff;`
      : ``}
`

type TProps = {
  active?: boolean
  href?: string
}

export const Button: React.FC<React.ComponentProps<`button`> & TProps> = (props) => {
  const { children, active, href, ...rest } = props

  return (
    // @ts-ignore
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Root type={!href && `button`} as={href && `a`} href={href} active={active} {...rest}>
      {children}
    </Root>
  )
}
