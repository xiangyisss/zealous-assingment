import { render, screen, act } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { StoryContext } from '@storybook/react'

import { INPUT_SELECTOR } from './Input'
import * as stories from './Input.story'

const {
  Default,
  Controlled
} = composeStories(stories)

it('should be possible to use a text input', async () => {
  render(<Default />)

  expect(
    await screen.findByTestId(INPUT_SELECTOR)
  ).toBeInTheDocument()
})

it('should be possible to control a text input', async () => {
  const onChange = jest.fn()
  const { container } = render(<Controlled onChange={onChange} />)

  await act(async () => {
    await Controlled.play({ canvasElement: container } as StoryContext<any>)
  })

  expect(
    onChange
  ).toHaveBeenCalledTimes('hello world'.length)
})
