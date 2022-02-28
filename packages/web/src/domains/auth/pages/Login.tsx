import styled from 'styled-components'
import { Panel } from '@zealous/ui'

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  background-color: #f4f4f4;

  ${Panel} {
    width: 400px;
  }
`

export function LoginPage () {
  return (
    <Layout>
      <Panel>

      </Panel>
    </Layout>
  )
}