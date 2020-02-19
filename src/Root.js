import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { HomePage } from './pages';
import Layout from './components/ui/Layout';
import RouteWrapper from './components/common/RouteWrapper';
import ProductPage from './pages/ProductPage';

const Root = () => {
  return (
    <div>
      <Router>
        <Switch>
          <RouteWrapper exact path="/" component={HomePage} layout={Layout}/>
          <RouteWrapper path="/home" component={HomePage} layout={Layout}/>
          <RouteWrapper exact path="/product/:categoryNo?" component={ProductPage} layout={Layout}/>
        </Switch>
      </Router>
    </div>
  );
};

export default Root;
