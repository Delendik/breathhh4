import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { LayoutCenter } from '../components/LayoutCenter'
import { chromeExtUrl } from '../utils/config'
import React from 'react'

const Title = styled.h1`
  margin: 0 0 25px;
  text-align: center;
`

const Href = styled.a`
  display: inline-flex;
  padding: 12px 24px;
  background-color: #eb6135;
  font-size: 18px;
  color: white;
  box-shadow: 0px 2px 0px #d33f32;
  border-radius: 4px;
  text-decoration: none;
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
