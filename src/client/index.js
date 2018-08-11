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
  ReactDOM.render(
    <Provider store={createStore({ history })}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  )
  registerServiceWorker()
}

export default boot
