import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { HomePage } from './pages';
import Layout from './components/ui/Layout';
import RouteWrapper from './components/common/RouteWrapper';

const Root = () => {
  return (
    <div>
      <Router>
        <Switch>
          <RouteWrapper exact path="/" component={HomePage} layout={Layout}/>
        </Switch>
      </Router>
    </div>
  );
};

export default Root;
