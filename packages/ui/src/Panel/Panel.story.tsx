import { Story, Meta, StoryObj } from '@storybook/react'
import { Input } from '../Input'
import { Panel, PanelProps } from './Panel'

type StoryType = StoryObj<PanelProps>

const Template: Story<PanelProps> = (args) => <Panel {...args} />

export default {
  title: 'Components/Panel',
  component: Template.bind({}),
  args: {
    title: 'Panel'
  }
} as Meta

export const Default: StoryType = {
  name: 'Panel',
  args: {
    title: 'default'
  }
}
