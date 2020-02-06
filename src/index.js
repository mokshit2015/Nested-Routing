import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import User from './User';
import AllUsers from './AllUsers';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/user/:id" component={User} />
      <Route path="/user" component={AllUsers} />
      <Route path="*" component={AllUsers} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
