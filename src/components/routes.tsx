import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Cv from '../pages/Cv'
// import About from '../pages/About'
import Projects from '../pages/Projects'
import Layout from './Layout'
import SolutionSeeker from '../pages/projects/solutionseeker'
import Cisco from '../pages/projects/cisco'
import Mobai from '../pages/projects/mobai'
import NFT from '../pages/projects/nft'
import Portefolio from '../pages/projects/portefolio'
import Ivaretatt from '../pages/projects/ivaretatt'
import Byggern from '../pages/projects/byggern'
import Blackjack from '../pages/projects/blackjack'
import Translator from '../pages/projects/translator'
import Realtime from '../pages/projects/realtime'
import Cleaningrobot from '../pages/projects/cleaningrobot'
import Gren from '../pages/projects/gren'
import CleanSeaSolutions from '../pages/projects/cleanseasolutions'
import Resolve from '../pages/projects/resolve'

const Routes: React.FC = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>

        <Route exact path={'/Home'}>
          <Home />
        </Route>
        <Route exact path={'/cv'}>
          <Cv />
        </Route>
        <Route exact path={'/projects'}>
          <Projects />
        </Route>

        <Route exact path={'/projects/solutionseeker'}>
          <SolutionSeeker />
        </Route>

        <Route exact path={'/projects/cisco'}>
          <Cisco />
        </Route>

        <Route exact path={'/projects/mobai'}>
          <Mobai />
        </Route>

        <Route exact path={'/projects/nft'}>
          <NFT />
        </Route>

        <Route exact path={'/projects/portefolio'}>
          <Portefolio />
        </Route>

        <Route exact path={'/projects/ivaretatt'}>
          <Ivaretatt />
        </Route>

        <Route exact path={'/projects/byggern'}>
          <Byggern />
        </Route>

        <Route exact path={'/projects/blackjack'}>
          <Blackjack />
        </Route>

        <Route exact path={'/projects/translator'}>
          <Translator />
        </Route>

        <Route exact path={'/projects/realtime'}>
          <Realtime />
        </Route>

        <Route exact path={'/projects/cleaningrobot'}>
          <Cleaningrobot />
        </Route>

        <Route exact path={'/projects/gren'}>
          <Gren />
        </Route>

        <Route exact path={'/projects/cleanseasolutions'}>
          <CleanSeaSolutions />
        </Route>

        <Route exact path={'/projects/resolve'}>
          <Resolve />
        </Route>
      </Switch>
    </Layout>
  </Router>
)

export default Routes
