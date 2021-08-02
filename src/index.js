import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { store } from './redux/redux-store';
import './index.css';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter>
    <Provider store={store}>
      <App state={store} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
