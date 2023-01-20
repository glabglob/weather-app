import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/App';

import { Provider } from 'react-redux';
import store from './components/store/store';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


