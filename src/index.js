import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

import App from './App'
import './styles/global.sass'

import reportWebVitals from './reportWebVitals'
import { store } from './mobx/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()

// TODO websoket изучить, WebGL, Audio
