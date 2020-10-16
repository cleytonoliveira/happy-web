import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/orphanages/create" component={CreateOrphanage} />
          <Route path="/orphanages/:id" component={Orphanage} />
          <Route path="/app" component={OrphanagesMap} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;
