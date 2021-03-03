import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import { Row, Table } from 'react-bootstrap'

import CartTableCell from '../components/Cart/CartTableCell'
import CartBottom from '../components/Cart/CartBottom.jsx'
import CartEmpty from '../components/Cart/CartEmpty'

import PageHeader from '../UI/PageHeader'
import Page from '../hoc/Page'
import LoaderPage from '../UI/Loader/LoaderPage'
import CatalogMap from '../mobx/CatalogMap'
import CartMap from '../mobx/CartMap'
import Catalog from '../mobx/Catalog'

const CartPage = observer(() => {

    useEffect(() => {
      if (!CatalogMap.catalogMap && CartMap.cartMap.length) {
        Catalog.load()
      }
    }, [])

    useEffect(() => {
      console.log('render CartPage')
      return () => Catalog.update()
    })

    if (!CartMap.cartMap.length) return <CartEmpty />
    if (!CatalogMap.catalogMap) return <LoaderPage />

    return (
      <Page>
        <PageHeader>Корзина</PageHeader>
        <Row>
          <Table striped bordered hover>
            <tbody>
            {CatalogMap.catalogMap && CartMap.cartMap.map((id) => <CartTableCell id={id} key={id} />)}
            </tbody>
          </Table>
        </Row>
        <CartBottom />
      </Page>
    )
  }
)

export default CartPage
