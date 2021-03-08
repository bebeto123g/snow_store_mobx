import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

import App from './App'
import './global.sass'

import { store } from './mobx/store'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()

// TODO: UI - сделать сайдбар для админа и для манагера
// TODO: для админа страниц: список манагеров, страница манагера и его изменение, добавление манагера
// TODO: для манагера страниц:
//  список товаров (фильтр: по производителю, по году выпуска, дате добавления),
//  страница каждого товара и его редактирование,
//  страница списка заказов (фильтр: готовые, в обработке, отмененные, отправлены) с пагинацией,
//  страница просмотра каждого заказа и изменение его статуса,
//  страница пользователей (фильтр: по дате последнего заказа, по дате регистрации) с пагинацией,
//  страница пользователя и его редактирование

// TODO - админ добавляет\удаляет манагеров, изменяет продукт\пользователя
// TODO - манагеров 2 вида, одни меняют статус заказа, вторые изменяют\добавляют\удаляют товары (big\small)

// TODO websoket изучить, WebGL, Audio
