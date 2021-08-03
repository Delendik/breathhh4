import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { LayoutCenter } from 'src/components/LayoutCenter'
import { chromeExtUrl } from 'src/utils/config'

const Title = styled.h1`
  margin: 0 0 25px;
  text-align: center;
`

const Href = styled.a`
  display: inline-flex;
  padding: 12px 24px;
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
  background-color: #eb6135;
  border-radius: 4px;
  box-shadow: 0 2px 0 #d33f32;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const PageIndex: React.FC<RouteComponentProps> = () => {
  return (
    <LayoutCenter>
      <div>
        <Title>Breathhh</Title>
        <Href href={chromeExtUrl}>Install from Google Store</Href>
      </div>
    </LayoutCenter>
  )
}
