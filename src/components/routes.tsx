import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Cv from '../pages/Cv'
// import About from '../pages/About'
import Projects from '../pages/Projects'
import LayoutWave from './LayoutWave'
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

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path={'/'}>
       <LayoutWave>
          <Home />
        </LayoutWave>
      </Route>

      <Route exact path={'/Home'}>
        <LayoutWave>
          <Home />
        </LayoutWave>

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

      <Route exact path={'/projects/solutionseeker'}>
        <Layout>
          <SolutionSeeker />
          </Layout>
      </Route>

      <Route exact path={'/projects/cisco'}>
        <Layout>
          <Cisco />
          </Layout>
      </Route>

      <Route exact path={'/projects/mobai'}>
        <Layout>
          <Mobai />
          </Layout>
      </Route>

      <Route exact path={'/projects/nft'}>
        <Layout>
          <NFT />
          </Layout>
      </Route>

      <Route exact path={'/projects/portefolio'}>
        <Layout>
          <Portefolio />
          </Layout>
      </Route>

      <Route exact path={'/projects/ivaretatt'}>
        <Layout>
          <Ivaretatt />
          </Layout>
      </Route>

      <Route exact path={'/projects/byggern'}>
        <Layout>
          <Byggern />
          </Layout>
      </Route>

      <Route exact path={'/projects/blackjack'}>
        <Layout>
          <Blackjack />
          </Layout>
      </Route>

      <Route exact path={'/projects/translator'}>
        <Layout>
          <Translator />
        </Layout>
      </Route>

      <Route exact path={'/projects/realtime'}>
        <Layout>
          <Realtime />
        </Layout>
      </Route>

      <Route exact path={'/projects/cleaningrobot'}>
        <Layout>
          <Cleaningrobot />
        </Layout>
      </Route>

      <Route exact path={'/projects/gren'}>
        <Layout>
          <Gren />
        </Layout>
      </Route>

    </Switch>
  </Router>

)

export default Routes
