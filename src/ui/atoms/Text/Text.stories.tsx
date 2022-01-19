import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from '.'

export default {
  title: 'atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (properties) => <Text {...properties} />

export const All = () => (
  <div style={{ display: 'grid', gap: 20 }}>
    <h2>Default</h2>
    <Default {...Default.args} />
    <h2>Presets</h2>
    <TextTitle {...TextTitle.args} />
    <TextRegular {...TextRegular.args} />
    <TextSubtitle {...TextSubtitle.args} />
    <TextLow {...TextLow.args} />
    <h2>Fixed</h2>
    <Text16 {...Text16.args} />
    <Text14 {...Text14.args} />
    <Text12 {...Text12.args} />
  </div>
)

const Default = Template.bind({})
Default.args = {
  children: 'Default',
}

const Text12 = Template.bind({})
Text12.args = {
  preset: '12',
  children: 'Text12',
}

const Text14 = Template.bind({})
Text14.args = {
  preset: '14',
  children: 'Text14',
}

const Text16 = Template.bind({})
Text16.args = {
  preset: '16',
  children: 'Text16',
}

const Text18 = Template.bind({})
Text18.args = {
  preset: '18',
  children: 'Text18',
}

const TextRegular = Template.bind({})
TextRegular.args = {
  preset: 'regular',
  children: 'TextRegular',
}

const TextLow = Template.bind({})
TextLow.args = {
  preset: 'low',
  children: 'TextLow',
}

const TextTitle = Template.bind({})
TextTitle.args = {
  preset: 'title',
  children: 'TextTitle',
}

const TextSubtitle = Template.bind({})
TextSubtitle.args = {
  preset: 'subtitle',
  children: 'TextSubtitle',
}
