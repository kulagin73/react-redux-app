import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import * as bootstrap from 'bootstrap'
import '../src/styles/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    	<Provider store={store}>
          <App />
      </Provider>
  </StrictMode>
);