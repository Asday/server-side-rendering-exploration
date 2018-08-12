import React from 'react'
import ReactDOM from 'react-dom'

import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'

import App from 'components/App'

import registerServiceWorker from 'registerServiceWorker'
import createStore from 'createStore'

const history = createBrowserHistory()

const boot = () => {
  const element = document.getElementById('root')
  const hydRender = element.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const initialState = window.__REDUX_STATE__ || undefined

  hydRender(
    <Provider store={createStore({ history, initialState })}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    element,
  )
  registerServiceWorker()
}

export default boot
