import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import { rootReducer } from './root/reducer'
import App from './root/App';

const store = createStore(rootReducer)


render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )