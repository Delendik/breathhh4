import { useState } from 'react'
import { Link } from '@reach/router'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import { Button } from 'src/ui/atoms'

const Root = styled.header<{ height: string; position: string }>`
  position: ${(props) => props.position};
  top: 0;
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
`

const Title = styled.div`
  font-size: 22px;

  & a {
    color: inherit;
    text-decoration: none;
  }
`
const Nav = styled.div`
  display: flex;
  gap: 10px;
  color: #232a34;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;

  & a {
    color: inherit;
    text-decoration: none;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`

interface IProps {
  hideLogin?: boolean
  enableNav?: boolean
}

const NavLink = (props: React.ComponentProps<typeof Link>) => (
  <Link
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          opacity: isCurrent ? `1` : `0.5`,
        },
      }
    }}
  />
)

export const Header: React.FC<IProps> = observer((props) => {
  const { enableNav } = props
  const [scroll, setScroll] = useState(0)
  window.addEventListener(`scroll`, function () {
    setScroll(window.scrollY)
  })
  return (
    <Root height={scroll < 300 ? `89px` : `77px`} position={scroll < 300 ? `relative` : `sticky`}>
      <Title>
        <Link to="/">
          <img width="204" height="13" src="/assets/logo-breathhh.svg" alt="logo" />
        </Link>
      </Title>
      {enableNav && (
        <Nav>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/subscription">Subscirption</NavLink>
          <NavLink to="/diary">Diary</NavLink>
        </Nav>
      )}
      <ButtonContainer>
        <Button type="button" appearanceTransponentBlack="transponentBlack">
          Log in
        </Button>
        <Button>Add to Chrome — it’s free</Button>
      </ButtonContainer>
    </Root>
  )
})
