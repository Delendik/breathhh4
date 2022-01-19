import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (properties) => <Button {...properties} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
}

export const DefaultWithIcon = Template.bind({})
DefaultWithIcon.args = {
  children: 'Button',
  iconLeft: 'Google',
}
