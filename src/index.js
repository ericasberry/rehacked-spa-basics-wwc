import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HelloWorld from './HelloWorld';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

let router =
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <Route path="/hello" component={HelloWorld} />
    </Route>
  </Router>;

ReactDOM.render(
  router,
  document.getElementById('root')
);
