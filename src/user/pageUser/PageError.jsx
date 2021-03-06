import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import styled from 'styled-components'

import { Row } from 'react-bootstrap'
import PageHeader from '../UI/PageHeader'
import ButtonToRoute from '../UX/Routes/ButtonToRoute'
import Error from '../mobx/PageError'

const RowError = styled(Row)`
  margin-top: 55px;
  gap: 10px;
  justify-content: center;
`

const PageError = observer(() => {

    useEffect(() => {
      return () => {
        console.log('clear PageError')
        Error.clear()
      }
    }, [])

    return (
      <>
        <PageHeader color={'brown'}>Оказия при загрузке данных!</PageHeader>
        <RowError>
          <ButtonToRoute to={'/'} variant={'success'}>
            На главную
          </ButtonToRoute>
          <ButtonToRoute to={'/catalog'} variant={'info'}>
            В каталог
          </ButtonToRoute>
        </RowError>
      </>
    )
  }
)

export default PageError
