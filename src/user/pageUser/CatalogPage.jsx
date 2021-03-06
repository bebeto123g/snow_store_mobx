import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import { Col, Row } from 'react-bootstrap'
import Page from '../../hoc/Page'

import LoaderPage from '../../UI/Loader/LoaderPage'
import PageHeader from '../../UI/PageHeader'

import CatalogCard from '../components/Catalog/Card'
import Catalog from '../../mobx/Catalog'

const CatalogPage = observer(() => {

    useEffect(() => {
      if (!Catalog.catalog.length) {
        Catalog.load()
      }
    }, [])

    useEffect(() => {
      console.log('render CatalogPage')
    })

    useEffect(() => {
      return () => Catalog.update()
    }, [])

    if (!Catalog.catalog.length) return <LoaderPage />

    return (
      <Page>
        <PageHeader>Каталог сноубордов</PageHeader>
        <Row>
          {Catalog.catalog && Catalog.catalog.map((product) => (
            <Col className='p-2' md='6' lg='6' xl='4' key={product.id}>
              <CatalogCard {...product} />
            </Col>
          ))}
        </Row>
      </Page>
    )
  }
)

export default CatalogPage
