import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Cv from '../pages/Cv'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Layout from './Layout'

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path={'/'}>
        <Layout>
          <Home />
        </Layout>
      </Route>

      <Route exact path={'/about'}>
        <Layout>
          <About />
        </Layout>

      </Route>
      <Route exact path={'/cv'}>
        <Layout>
          <Cv />
        </Layout>

      </Route>
      <Route exact path={'/projects'}>
        <Layout>
          <Projects />
        </Layout>
      </Route>
    </Switch>
  </Router>

)

export default Routes
