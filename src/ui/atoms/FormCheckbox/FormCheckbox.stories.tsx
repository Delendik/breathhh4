import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from '..'
import { FormCheckbox } from '.'

export default {
  title: 'atoms/FormCheckbox',
  component: FormCheckbox,
} as ComponentMeta<typeof FormCheckbox>

const Template: ComponentStory<typeof FormCheckbox> = (properties) => {
  return <FormCheckbox {...properties} />
}

const Checked = Template.bind({})
Checked.args = {
  children: <Text>Hello</Text>,
  checked: true,
}

const UnChecked = Template.bind({})
UnChecked.args = {
  children: <Text>Hello</Text>,
  checked: false,
}

export const All = () => {
  const [checked1, checkedSet1] = useState(Checked.args.checked)
  const [checked2, checkedSet2] = useState(UnChecked.args.checked)

  return (
    <div>
      <div>
        <Checked
          {...Checked.args}
          checked={checked1}
          onChange={(event_) => checkedSet1(event_.target.checked)}
        />
      </div>
      <div>
        <UnChecked
          {...UnChecked.args}
          checked={checked2}
          onChange={(event_) => checkedSet2(event_.target.checked)}
        />
      </div>
    </div>
  )
}
