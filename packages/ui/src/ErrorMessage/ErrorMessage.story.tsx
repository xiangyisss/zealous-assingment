import { Story, Meta, StoryObj } from '@storybook/react'
import { ErrorMessage, ErrorMessageProps } from './ErrorMessage'

type StoryType = StoryObj<ErrorMessageProps>

const Template: Story<ErrorMessageProps> = (args) => <ErrorMessage {...args}/>

export default {
  title: 'Components/ErrorMessage',
  component: Template.bind({}),
  args: {
    title: 'ErrorMessage'
  }
} as Meta

export const Default: StoryType = {
  name: 'ErrorMessage',
  args: {
    message: 'Please enter a valid email.'
  }
}