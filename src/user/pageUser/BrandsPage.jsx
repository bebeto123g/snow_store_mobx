import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import { Row } from 'react-bootstrap'
import Page from '../../hoc/Page'

import PageHeader from '../../UI/PageHeader'

import LoaderPage from '../../UI/Loader/LoaderPage'
import BrandsCards from '../components/BrandsCards'
import Brands from '../../mobx/Brands'

const BrandsPage = observer(() => {
    useEffect(() => {
      if (!Brands.brands) {
        Brands.load()
      }
    }, [])

    useEffect(() => {
      console.log('render BrandsPage')
    })

    if (!Brands.brands) return <LoaderPage />

    return (
      <Page>
        <PageHeader>Лучшие брэнды</PageHeader>
        <Row>
          {Brands.brands && <BrandsCards brands={Brands.brands} />}
        </Row>
      </Page>
    )
  }
)

export default BrandsPage
