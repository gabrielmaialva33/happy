import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanages from './pages/Orphanage';
import CreateOrphanagesMap from './pages/CreateOrphanage';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/app" component={OrphanagesMap} />

      <Route path="/orphanages/create" component={CreateOrphanagesMap} />
      <Route path="/orphanages/:id" component={Orphanages} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
