import styled from "styled-components"

import { themeBorderRadius, themeSpacing, themeFontSize } from "../Theme/themeAccessor"

export const ERROR_SELECTOR = 'zl-error'

export interface ErrorMessageProps {
  message?: string
}

const Message = styled.span`
  text-align: center;
  color: #FF6347;
  padding: 8px;
  margin-right: ${themeSpacing('small')};
  font-family: "Roboto", sans-serif;
  font-size: ${themeFontSize('small')};
`
const Wrapper = styled.div`
  border: 1px solid #FF6347;
  border-radius: ${themeBorderRadius('base')};
  width: 220px;
  display: flex;
  justify-content: space-between;
`
const Border = styled.div`
  width: 8px;
  border-radius: 2px 0 0 2px;
  background-color: #FF6347;
`

export const ErrorMessage = (props: ErrorMessageProps) => {
  const { message = '' } = props

  return (
    <Wrapper>
      <Border>
      </Border>
      <Message data-testid={ERROR_SELECTOR}>{message}</Message>
    </Wrapper>
  )
}