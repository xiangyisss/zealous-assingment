import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type PanelProps = HTMLAttributes<HTMLDivElement>

export const PANEL_SELECTOR = 'zl-panel'

export const Panel = styled.div.attrs({
  'data-testid': PANEL_SELECTOR
})`
  position: relative;
  background-color: white;
  border: 1px solid lightgray;
  min-height: 100px;
  padding: 20px;
`
