import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages';
import Layout from './components/ui/Layout';

const Root = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default Root;
