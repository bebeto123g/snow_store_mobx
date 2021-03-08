import React from 'react'
import PageHeader from '../../UI/PageHeader'
import Page from '../../hoc/Page'
import { useParams } from 'react-router-dom'
import ButtonToRoute from '../../UX/Button/ButtonToRoute'

const ProductsListPage = () => {

  const { list } = useParams()

  return (
    <Page>
      <PageHeader>Список товаров категории {list}</PageHeader>
      <ButtonToRoute to={`/manager/products/${list}/123`}>К точной модели</ButtonToRoute>
    </Page>
  )
}

export default ProductsListPage