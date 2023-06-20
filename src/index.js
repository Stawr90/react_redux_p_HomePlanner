import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux'; 

import App from './components/app/App';
import reducer from './store/reducer/reducer';

import './styles/index.scss';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);