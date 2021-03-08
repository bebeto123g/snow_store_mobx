import React from 'react'
import PageHeader from '../../UI/PageHeader'
import Page from '../../hoc/Page'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const { list, id } = useParams()

  return (
    <Page>
      <PageHeader>Страница отдельного товара {list + ' ' + id}</PageHeader>
    </Page>
  )
}

export default ProductPage