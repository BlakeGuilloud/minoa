import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import {
  Home,
} from './components';

require('./styles/App.css');

const Hello = (props) => {
  return (
    <div>eeyy</div>
  )
}

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={Home} />
        <Route exact path="/hello" component={Hello} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
