import styled from 'styled-components'
import { Panel, Input } from '@zealous/ui'
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
  const [username, setUsername] = useState('username')
  return (
    <Layout>
      <Panel>
        <Input
          value={username}
          onChange={setUsername}/>
      </Panel>
    </Layout>
  )
}