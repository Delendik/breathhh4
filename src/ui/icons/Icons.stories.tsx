import React from 'react'
import { ComponentMeta } from '@storybook/react'

import * as icons from '.'

export default {
  title: 'ui/icons',
} as ComponentMeta<typeof icons.Google>

export const Icons = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 200px)' }}>
      {Object.keys(icons).map((icon, index) => {
        return (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <span>{React.createElement(icons[icon])}</span>
            <span style={{ marginLeft: 10 }}>{icon}</span>
          </div>
        )
      })}
    </div>
  )
}
