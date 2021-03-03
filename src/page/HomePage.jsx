import React, { useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'

import { Button, Row } from 'react-bootstrap'

import PageHeader from '../UI/PageHeader'
import Page from '../hoc/Page'
import Alert from '../mobx/Alert'

const HomePage = observer(() => {

    const testHandler = useCallback(() => {
      Alert.show({
        variant: 'success',
        message: 'ТЕСТОВОЕ СООБЩЕНИЕ! /run/media/bebeto/documents/web/REACT/snowboards_store/src/page/HomePage.jsx/run/media/bebeto/documents/web/REACT/snowboards_store/src/page/HomePage.jsx/run/media/bebeto/documents/web/REACT/snowboards_store/src/page/HomePage.jsx'
      })
    }, [])

  useEffect(() => {
    console.log('render HomePage')
  })

    return (
      <Page>
        <PageHeader>Домашняя страница</PageHeader>
        <Row>
          <Button variant={'outline-success'} onClick={testHandler}>
            Test button
          </Button>
        </Row>
      </Page>
    )
  }
)

export default HomePage
