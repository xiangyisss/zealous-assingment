import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import { ErrorMessage, ERROR_SELECTOR } from './ErrorMessage'
import * as stories from './ErrorMessage.story'

const {
  Default
} = composeStories(stories)

it('should be possible to render Error message component', async () => {
  render(<Default />)

  expect(
    await screen.findByTestId(ERROR_SELECTOR)
  ).toBeInTheDocument()
})

it('check if Error message default is empty string', async () => {
  render(<ErrorMessage />)

  expect(
    (await screen.findByTestId(ERROR_SELECTOR)).textContent
  ).toEqual('')
})

it('check if props passed are displayed as text', async () => {
  render(<ErrorMessage message='test message' />)

  expect(
    (await screen.findByTestId(ERROR_SELECTOR)).textContent
  ).toEqual('test message')
})