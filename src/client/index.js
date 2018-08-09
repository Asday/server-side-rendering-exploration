import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import Home from 'containers/Home'

import registerServiceWorker from 'registerServiceWorker'
import store from 'store'

const boot = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    document.getElementById('root'),
  )
  registerServiceWorker()
}

export default boot
