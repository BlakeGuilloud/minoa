import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import {
  Home,
  Login,
  Register,
} from './components';

require('./styles/App.css');

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
