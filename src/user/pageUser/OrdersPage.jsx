import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import { Row, Table } from 'react-bootstrap'

import PageHeader from '../../UI/PageHeader'
import Page from '../../hoc/Page'
import LoaderPage from '../../UI/Loader/LoaderPage'
import OrdersTableCell from '../components/Order/OrdersTableCell'
import { TrTableOrders } from '../../styledComponents/TrTableOrders'
import Orders from '../../mobx/Orders'
import OrderEmpty from '../components/Order/OrderEmpty'

const OrdersPage = observer(() => {

    useEffect(() => {
      if (!Orders.orders) {
        Orders.load()
      }
    }, [])

    useEffect(() => {
      console.log('render OrdersPage')
    })

    if (!Orders.orders) return <LoaderPage />

    if (!Orders.orders.length) return <OrderEmpty />

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
