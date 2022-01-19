import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from '.'

export default {
  title: 'atoms/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (properties) => {
  return <Footer {...properties} />
}

export const Default = Template.bind({})
Default.args = {}
