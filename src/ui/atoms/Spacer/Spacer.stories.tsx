import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Spacer } from '.'

export default {
  title: 'atoms/Spacer',
  component: Spacer,
} as ComponentMeta<typeof Spacer>

const Template: ComponentStory<typeof Spacer> = (properties) => <Spacer {...properties} />

export const All = () => {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <div style={{ backgroundColor: 'blue' }}>
        <Default />
      </div>
      <div style={{ backgroundColor: 'blue' }}>
        <Space4 {...Space4.args} />
      </div>
      <div style={{ backgroundColor: 'blue' }}>
        <Space20 {...Space20.args} />
      </div>
      <div style={{ backgroundColor: 'blue' }}>
        <Space24 {...Space24.args} />
      </div>
      <div style={{ backgroundColor: 'blue' }}>
        <Space32 {...Space32.args} />
      </div>
      <div style={{ backgroundColor: 'blue' }}>
        <Space64 {...Space64.args} />
      </div>
    </div>
  )
}

const Default = Template.bind({})

const Space4 = Template.bind({})
Space4.args = {
  s: '4',
}

const Space20 = Template.bind({})
Space20.args = {
  s: '20',
}

const Space24 = Template.bind({})
Space24.args = {
  s: '24',
}

const Space32 = Template.bind({})
Space32.args = {
  s: '32',
}

const Space64 = Template.bind({})
Space64.args = {
  s: '64',
}
