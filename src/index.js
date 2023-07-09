import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { applyMiddleware } from 'redux';

// Logger with default options
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const store=createStore(reducer,applyMiddleware(thunk,logger));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

