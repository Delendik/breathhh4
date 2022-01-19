import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Row } from '.'

export default {
  title: 'atoms/Row',
  component: Row,
} as ComponentMeta<typeof Row>

const Template: ComponentStory<typeof Row> = (properties) => <Row {...properties} />

export const Default = Template.bind({})
