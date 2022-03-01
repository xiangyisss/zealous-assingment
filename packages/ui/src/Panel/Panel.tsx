import { HTMLAttributes } from 'react'
import styled from 'styled-components'

import {
  themePalette,
  themeColor,
  themeSpacing
} from '../Theme/themeAccessor'

export type PanelProps = HTMLAttributes<HTMLDivElement> & {
  title?: string
  children?: React.ReactNode[]
}

const PanelWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: ${themeColor('white')};
  border: 1px solid ${themePalette('neutral', 300)};
  min-height: 100px;
  padding: ${themeSpacing('base')};
  /* width: 400px; */
`

const PanelTitle = styled.h3`
  margin: 0;
  padding: 0;
`

const PanelContent = styled.div`
  margin-top: ${themeSpacing('base')};
`

export const Panel = ({ title, children }: PanelProps) => (
  <PanelWrapper>
   <PanelTitle>{title}</PanelTitle>
    <PanelContent>
      {children}
    </PanelContent>
  </PanelWrapper>
)