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


// TODO - админ добавляет\удаляет манагеров, изменяет продукт\пользователя
// TODO - манагеров 2 вида, одни меняют статус заказа, вторые изменяют\добавляют\удаляют товары (big\small)

// TODO websoket изучить, WebGL, Audio
