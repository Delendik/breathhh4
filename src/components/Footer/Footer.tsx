import { Link } from '@reach/router'
import styled from 'styled-components'

const Root = styled.footer`
  max-width: 860px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 35px;
  padding-bottom: 35px;
  border-top: 1px solid #eeeeee;
`

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Footer: React.FC = () => {
  return (
    <Root>
      <Inner>
        <div>
          <div>Developed by Yahht</div>
          <div>© 2021 Breathhh, All rights reserved</div>
        </div>
        <div>
          <div>
            <Link to="/terms_of_use">Terms of Use</Link>
          </div>
          <div>
            <Link to="/privacy_policy">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <div>Currently in Alfa</div>
        </div>
      </Inner>
    </Root>
  )
}
