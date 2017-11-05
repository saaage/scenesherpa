import React from 'react'
import { Route } from 'react-router-dom'

import Header from 'Header'
import Actor from 'components/Actor'
import Movie from 'components/Movie'
import Welcome from 'components/Welcome'
import SimpleNav from 'components/SimpleNav'

const App = () => (
  <div>
    <SimpleNav />
    <Header />
    <Route exact path="/" component={Welcome} />
    <Route path="/actor" component={Actor} />
    <Route path="/movie" component={Movie} />
  </div>
)

export default App
