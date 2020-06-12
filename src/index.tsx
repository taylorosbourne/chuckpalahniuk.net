/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import * as serviceWorker from './serviceWorker';

import './App.css'
import { Layout } from './containers';
import { Home } from './pages';
import { About } from './pages';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/chuck' component={About} />
          </Switch>
        </Layout>
      </ScrollToTop>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
