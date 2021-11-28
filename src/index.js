import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {createAPI} from './services/api';
import { reducer } from './store/reducer';
import { Provider } from 'react-redux';
import { loadTree } from './store/api-actions';

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
  )
);

Promise.all([
  store.dispatch(loadTree())
])
.then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
})
