import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexLayout from './component/pages/IndexLayout';
import SearchDisplay from './component/pages/SearchDisplay';
import AboutUs from './component/pages/About';
import NoMatch from './component/pages/NoMatch';
import PrivacyPolicy from './component/pages/PrivacyPolicy';

const App = () => (
  <div className="">
    <Switch>
      <Route exact path="/" component={IndexLayout} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/search/" component={SearchDisplay} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);
export default App;
