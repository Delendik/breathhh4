import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from '..'
import { FormToggle } from '.'

export default {
  title: 'atoms/FormToggle',
  component: FormToggle,
} as ComponentMeta<typeof FormToggle>

const Template: ComponentStory<typeof FormToggle> = (properties) => {
  return <FormToggle {...properties} />
}

export const Default = Template.bind({})
Default.args = {
  children: <Text>Hello</Text>,
}
