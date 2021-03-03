import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import AlertUI from '../UI/Alert'
import Alert from '../mobx/Alert'

export const AppAlert = styled.div`
  margin: 0;
  max-width: 500px;
  position: fixed;
  right: 25px;
  top: 70px;
  z-index: 10000;

  p {
    overflow-x: hidden;
  }
`

const AlertApp = observer(() => {

  const handler = useCallback(() => {
    Alert.hide()
  }, [])

  if (!Alert.isAlert) return <>{''}</>

  return (
    <AppAlert>
      <AlertUI
        variant={Alert.variant}
        closeAlert={handler}
        message={Alert.message}
      />
    </AppAlert>
  )
})

export default AlertApp
