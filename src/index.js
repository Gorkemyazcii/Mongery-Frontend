
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';  // doğru yolu kontrol edin
import App from './App';
import "./index.css"; // Veya Tailwind ile ilgili stil dosyanız


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
