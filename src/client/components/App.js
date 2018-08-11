import React from 'react'

import { Route, Switch } from 'react-router'

import About from 'components/About'
import HeaderNav from 'components/HeaderNav'
import NotFound from 'components/NotFound'
import Home from 'containers/Home'

export default class App extends React.Component {
  render = () => (
    <div>
      <HeaderNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
