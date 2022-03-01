import { Story, Meta, StoryObj } from '@storybook/react'

import { Input, InputProps } from './Input'

type StoryType = StoryObj<InputProps>

const Template: Story<InputProps> = (args) => <Input {...args} />

export default {
  title: 'Components/Input',
  component: Template.bind({}),
  args: {
    value: 'this is a value'
  }
} as Meta

export const InputStory: StoryType = {
  name: 'Text',
  args: {
    value: 'Input'
  }
}
