import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { themePalette, themeColor, themeSpacing } from '../Theme/themeAccessor'

export type PanelProps = HTMLAttributes<HTMLDivElement>

export const PANEL_SELECTOR = 'zl-panel'

export const Panel = styled.div.attrs({
  'data-testid': PANEL_SELECTOR
})`
  position: relative;
  background-color: ${themeColor('white')};
  border: 1px solid ${themePalette('neutral', 300)};
  min-height: 100px;
  padding: ${themeSpacing('base')};
`
