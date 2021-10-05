import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Cv from '../pages/Cv'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Burger from './Burger'

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path={'/'}>
        <Burger/>
        <Home />
      </Route>
      <Route exact path={'/about'}>
      <Burger/>
        <About />
      </Route>
      <Route exact path={'/cv'}>
      <Burger/>
        <Cv />
      </Route>
      <Route exact path={'/projects'}>
      <Burger/>
        <Projects />
      </Route>
    </Switch>
  </Router>

)

export default Routes
