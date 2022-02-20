import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoaderTop } from '.'

export default {
  title: 'atoms/LoaderTop',
  component: LoaderTop,
} as ComponentMeta<typeof LoaderTop>

const Template: ComponentStory<typeof LoaderTop> = (properties) => {
  return <LoaderTop {...properties} />
}

export const Default = Template.bind({})
Default.args = {}
