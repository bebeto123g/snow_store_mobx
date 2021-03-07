import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useParams } from 'react-router-dom'
import { toJS } from 'mobx'

import { Row, Table } from 'react-bootstrap'

import Page from '../../hoc/Page'
import PageHeader from '../../UI/PageHeader'
import LoaderPage from '../../UI/Loader/LoaderPage'
import { TrTableDetail, TrTableOrders } from '../../styledComponents/TrTableOrders'
import OrderDetailCart from '../components/Order/OrderDetailCart'
import ButtonShowModal from '../../UX/Modal/ButtonShowModal'
import Orders from '../../mobx/Orders'
import Catalog from '../../mobx/Catalog'

const OrderDetailsPage = observer(() => {
  const { id } = useParams()

  useEffect(() => {
    if (id !== Orders.detailOrder.orderId) {
      Orders.loadDetail(id)
    }
    if (!Catalog.catalog.length) {
      Catalog.load()
    }
  }, [id])

  useEffect(() => {
    console.log('render OrderDetailsPage')
  })

  if (
    !Object.keys(Orders.detailOrder).length ||
    id !== Orders.detailOrder.orderId ||
    !Catalog.catalog.length
  )
    return <LoaderPage />

  return (
    <Page>
      <PageHeader>Детали заказа № {Orders.detailOrder.orderNum}</PageHeader>
      <Row>
        <Table bordered hover striped>
          <tbody>
            <TrTableDetail>
              <td>Статус заказа</td>
              <td>{Orders.detailOrder.status}</td>
            </TrTableDetail>
            <TrTableDetail>
              <td>Дата заказа</td>
              <td>{Orders.detailOrder.date}</td>
            </TrTableDetail>
            <TrTableDetail>
              <td>Сумма заказа</td>
              <td>{Orders.detailOrder.sum} &#8381;</td>
            </TrTableDetail>
          </tbody>
        </Table>
      </Row>
      <Row className="justify-content-center">
        <h3>Корзина</h3>
      </Row>
      <Row>
        <Table bordered striped>
          <thead>
            <TrTableOrders>
              <th>Товар</th>
              <th>Количество</th>
              <th>Цена / 1ед</th>
            </TrTableOrders>
          </thead>
          <tbody>
            {toJS(Orders.detailOrder.cart).map((item) => {
              return <OrderDetailCart key={item.id} {...item} />
            })}
          </tbody>
        </Table>
      </Row>
      <Row>
        <ButtonShowModal
          type={'status_order'}
          variant={
            Orders.detailOrder.status === 'Заказ отменен' ? 'success' : 'danger'
          }
          className={'ml-auto'}
        >
          {Orders.detailOrder.status === 'Заказ отменен'
            ? 'Возобновить заказ'
            : 'Отменить заказ'}
        </ButtonShowModal>
      </Row>
    </Page>
  )
})

export default OrderDetailsPage
