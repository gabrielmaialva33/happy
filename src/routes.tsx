import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Landing} />
    <Route path="/app" component={OrphanagesMap} />
  </BrowserRouter>
);

export default Routes;
