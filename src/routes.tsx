import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing/index';
import Content from './pages/Content/index';


const Routes = () => (
  <BrowserRouter>
      <Route exact path = '/portfolio/'component={Landing}/> 
      <Route path='/portfolio/home/' component={Content}/>
  </BrowserRouter>
)

export default Routes;