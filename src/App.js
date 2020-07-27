import React from 'react'
import { Route } from 'react-router-dom'
import Header from './containers/Header'
import Home from './views/Home'
import Form from './views/Form'
import Event from './views/Event'
import Auth from './views/Auth/Auth'

const App = () => (
  <div>
    <Header />

    <div className="container" id="main">
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/event" component={Event} />
      <Route path="/auth" component={Auth} />
    </div>

  </div>
)

export default App
