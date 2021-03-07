import React from 'react'
import { Row } from 'react-bootstrap'
import PageHeader from '../../../UI/PageHeader'
import ButtonToRoute from '../../../UX/Button/ButtonToRoute'
import Page from '../../../hoc/Page'

const OrderEmpty = () => {
  return (
    <Page>
      <PageHeader>Заказы отсутствуют</PageHeader>
      <Row>
        <ButtonToRoute to={'/catalog'} variant={'info'} className={'mx-auto'}>
          Перейти в каталог
        </ButtonToRoute>
      </Row>
    </Page>
  )
}

export default OrderEmpty