import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MovieContainer from 'containers/MovieContainer'
import TVContainer from 'containers/TVContainer'
import Search from 'containers/Search'
import ActorContainer from 'containers/ActorContainer'

const App = () => (
  <Switch>
    <Route exact path="/" component={Search} />
    <Route path="/actor/:id" component={ActorContainer} />
    <Route path="/movie/:id" component={MovieContainer} />
    <Route path="/tv/:id" component={TVContainer} />
  </Switch>
)

export default App
