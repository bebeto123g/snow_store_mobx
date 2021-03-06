import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import { Row, Table } from 'react-bootstrap'

import PageHeader from '../UI/PageHeader'
import Page from '../hoc/Page'
import LoaderPage from '../UI/Loader/LoaderPage'
import ButtonToRoute from '../UX/Routes/ButtonToRoute'
import OrdersTableCell from '../components/OrdersTableCell'
import { TrTableOrders } from '../styles/TrTableOrders'
import Orders from '../mobx/Orders'

const OrdersPage = observer(() => {

    useEffect(() => {
      if (!Orders.orders.length) {
        Orders.load()
      }
    }, [])

    useEffect(() => {
      console.log('render OrdersPage')
    })

    if (!Orders.orders) return <LoaderPage />
    if (!Orders.orders.length)
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

    return (
      <Page>
        <PageHeader>Заказы</PageHeader>
        <Row>
          <Table striped bordered hover size='sm' variant='dark'>
            <thead>
            <TrTableOrders>
              <th>Номер заказа</th>
              <th>Статус</th>
              <th>Дата</th>
              <th>Сумма</th>
            </TrTableOrders>
            </thead>
            <tbody>
            {Orders.orders.map((order) => {
              return <OrdersTableCell key={order.orderId} {...order} />
            })}
            </tbody>
          </Table>
        </Row>
      </Page>
    )
  }
)

export default OrdersPage
