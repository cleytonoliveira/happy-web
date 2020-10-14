import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/app" component={OrphanagesMap} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;
