import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TabMenu } from '.'

export default {
  title: 'atoms/TabMenu',
  component: TabMenu,
} as ComponentMeta<typeof TabMenu>

const Template: ComponentStory<typeof TabMenu> = () => {
  const [value, valueSet] = useState(0)
  return <TabMenu onChange={valueSet} activeTab={value} />
}

export const Default = Template.bind({})
Default.args = {}
