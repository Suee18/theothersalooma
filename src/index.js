import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IP7store } from './IP7store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={IP7store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
