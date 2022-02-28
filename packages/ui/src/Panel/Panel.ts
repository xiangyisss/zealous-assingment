import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type PanelProps = HTMLAttributes<HTMLDivElement>

export const Panel = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid lightgray;
  min-height: 100px;
  padding: 20px;
`
