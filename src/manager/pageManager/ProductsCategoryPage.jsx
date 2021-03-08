import React from 'react'
import Page from '../../hoc/Page'
import PageHeader from '../../UI/PageHeader'
import ButtonToRoute from '../../UX/Button/ButtonToRoute'

const ProductsCategoryPage = () => {
  return (
    <Page>
      <PageHeader>Список категорий товаров</PageHeader>
      <ButtonToRoute to={'/manager/products/bord'}>
        Борды
      </ButtonToRoute>
      <ButtonToRoute to={'/manager/products/binding'}>
        Крелпения
      </ButtonToRoute>
      <ButtonToRoute to={'/manager/products/boots'}>
        Ботинки
      </ButtonToRoute>
      {/* делаем состояние listProduct и category, по ним делаем запрос и рендерим список, а потом уже переходим на страницу отдельного товара по его id и делаем запрос и рендерим */}
    </Page>
  )
}

export default ProductsCategoryPage