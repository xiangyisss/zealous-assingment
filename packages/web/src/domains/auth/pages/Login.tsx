import styled from 'styled-components'
import { Panel, Input, ErrorMessage } from '@zealous/ui'
import { ChangeEvent } from 'react'
import { useState } from 'react'


const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f4f4f4;
`

export function LoginPage() {

  const [ isValidEmail, setIsValidEmail ] = useState<boolean>(true)
  const [ inputValue, setInputValue ] = useState<string>('')

  const emailIsValid = ( value : string ) => {
    setInputValue( value )
    setIsValidEmail( true )
  }

  const handleEmailInput = (value: string , e : ChangeEvent<HTMLInputElement>) => {
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const validEmail = e.target.value.match(format) || e.target.value === ''
    validEmail ? emailIsValid(e.target.value) : setIsValidEmail(false)
  }

  return (
    <Layout>
      <Panel>
        <Input placeholder='email' onChange={handleEmailInput} />
        {!isValidEmail && <ErrorMessage message="Please enter a valid email." />}
      </Panel>
    </Layout>
  )
}