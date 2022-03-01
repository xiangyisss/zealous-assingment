import { ChangeEvent } from 'react'
import styled from 'styled-components'
import { themePalette, themeSpacing, themeBorderRadius } from '../Theme/themeAccessor'

export interface InputProps {
  value?: string
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, onChange }: InputProps) => {
  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value, e)
  }
  return (
    <StyledInput 
      value= { value }
      onChange={inputOnChange}
    />
  )
}
  
const StyledInput = styled.input`
  background-color: ${themePalette('neutral', 300)};
  border: none;
  border-radius: ${themeBorderRadius('base')};
  padding: ${themeSpacing('small')};
  width: 400px;
  :focus {
    outline: none;
    outline: 2px solid ${themePalette('primary', 500)};
  }
`