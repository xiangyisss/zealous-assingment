import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import { PANEL_SELECTOR } from './Panel'
import * as stories from './Panel.story'

const {
  Default
} = composeStories(stories)

it('should be possible to show a panel component', async () => {
  render(<Default />)

  expect(
    await screen.findByTestId(PANEL_SELECTOR)
  ).toBeInTheDocument()
})
