import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { store } from './redux/redux-store';
import './index.css';

const rerenderEntriesTree = () => {
  ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <React.StrictMode>
      <BrowserRouter>
        <App
          store={store}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

rerenderEntriesTree(store.getState());

store.subscribe(() => rerenderEntriesTree(store.getState()));
